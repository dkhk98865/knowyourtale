import { createClient } from '@/lib/supabase-client';
import { characters } from '@/types/characters';

export interface UserPromptProgress {
  id: string;
  user_id: string;
  user_email: string;
  current_week: number;
  character_id: string;
  last_prompt_date: string;
  next_prompt_date: string;
  total_prompts_viewed: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CurrentPrompt {
  characterId: string;
  characterName: string;
  prompt: string;
  weekNumber: number;
  description: string;
}

export class UserPromptProgressClientService {
  private supabase = createClient();

  /**
   * Get the current prompt for a user
   */
  async getCurrentPrompt(userId: string): Promise<CurrentPrompt | null> {
    try {
      const { data: progress } = await this.supabase
        .from('user_prompt_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .single();

      if (!progress) {
        console.log(`No active progress found for user ${userId}`);
        return null;
      }

      // Get character data
      const character = characters.find(c => c.id === progress.character_id);
      if (!character) {
        console.error(`Character not found: ${progress.character_id}`);
        return null;
      }

      return {
        characterId: character.id,
        characterName: character.name,
        prompt: character.weeklyPrompt,
        weekNumber: progress.current_week,
        description: character.description
      };
    } catch (error) {
      console.error('Error in getCurrentPrompt:', error);
      return null;
    }
  }

  /**
   * Get user's progress summary
   */
  async getUserProgress(userId: string): Promise<{
    currentWeek: number;
    totalWeeks: number;
    characterName: string;
    isActive: boolean;
    nextPromptDate: string;
  } | null> {
    try {
      const { data: progress } = await this.supabase
        .from('user_prompt_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .single();

      if (!progress) {
        return null;
      }

      const character = characters.find(c => c.id === progress.character_id);

      return {
        currentWeek: progress.current_week,
        totalWeeks: 12,
        characterName: character?.name || 'Unknown',
        isActive: progress.is_active,
        nextPromptDate: progress.next_prompt_date
      };
    } catch (error) {
      console.error('Error in getUserProgress:', error);
      return null;
    }
  }

  /**
   * Advance user to next prompt (when they complete current one)
   */
  async advanceToNextPrompt(userId: string): Promise<boolean> {
    try {
      const { data: progress } = await this.supabase
        .from('user_prompt_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .single();

      if (!progress) {
        console.log(`No active progress found for user ${userId}`);
        return false;
      }

      const nextWeek = progress.current_week + 1;
      const nextCharacterIndex = nextWeek <= 12 ? nextWeek - 1 : 0; // Loop back to start
      const nextCharacter = characters[nextCharacterIndex];
      const nextPromptDate = this.getNextMonday();

      const { error } = await this.supabase
        .from('user_prompt_progress')
        .update({
          current_week: nextWeek,
          character_id: nextCharacter.id,
          last_prompt_date: new Date().toISOString(),
          next_prompt_date: nextPromptDate,
          total_prompts_viewed: progress.total_prompts_viewed + 1,
          is_active: nextWeek <= 12
        })
        .eq('user_id', userId);

      if (error) {
        console.error('Error advancing to next prompt:', error);
        return false;
      }

      console.log(`Advanced user ${userId} to week ${nextWeek}: ${nextCharacter.name}`);
      return true;
    } catch (error) {
      console.error('Error in advanceToNextPrompt:', error);
      return false;
    }
  }

  /**
   * Get next Monday
   */
  private getNextMonday(): string {
    const now = new Date();
    const daysUntilMonday = (8 - now.getDay()) % 7;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    nextMonday.setHours(9, 0, 0, 0);
    return nextMonday.toISOString();
  }
}
