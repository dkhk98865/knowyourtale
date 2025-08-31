import { createClient } from '@/lib/supabase-server';
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

export class UserPromptProgressService {
  private supabase: any = null;

  private async getSupabase() {
    if (!this.supabase) {
      this.supabase = await createClient();
    }
    return this.supabase;
  }

  /**
   * Initialize a new user for the 12-week prompt cycle
   */
  async initializeUser(userId: string, userEmail: string): Promise<boolean> {
    try {
      const supabase = await this.getSupabase();
      
      // Check if user already exists
      const { data: existing } = await supabase
        .from('user_prompt_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .single();

      if (existing) {
        console.log(`User ${userEmail} already exists in prompt cycle`);
        return true;
      }

      // Calculate next prompt date (next Monday)
      const nextPromptDate = this.getNextMonday();

      // Create new user record
      const { error } = await supabase
        .from('user_prompt_progress')
        .insert({
          user_id: userId,
          user_email: userEmail,
          current_week: 1,
          character_id: characters[0].id, // Start with Snow White
          next_prompt_date: nextPromptDate,
          total_prompts_viewed: 0,
          is_active: true
        });

      if (error) {
        console.error('Error initializing user:', error);
        return false;
      }

      console.log(`Initialized user ${userEmail} for prompt cycle`);
      return true;
    } catch (error) {
      console.error('Error in initializeUser:', error);
      return false;
    }
  }

  /**
   * Get the current prompt for a user
   */
  async getCurrentPrompt(userId: string): Promise<CurrentPrompt | null> {
    try {
      const supabase = await this.getSupabase();
      
      const { data: progress } = await supabase
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
   * Advance user to next prompt (when they complete current one)
   */
  async advanceToNextPrompt(userId: string): Promise<boolean> {
    try {
      const supabase = await this.getSupabase();
      
      const { data: progress } = await supabase
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

      const { error } = await supabase
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
   * Get all users ready for new prompts this week
   */
  async getUsersReadyForNewPrompt(): Promise<string[]> {
    try {
      const supabase = await this.getSupabase();
      const today = new Date();
      
      const { data: users } = await supabase
        .from('user_prompt_progress')
        .select('user_id')
        .eq('is_active', true)
        .lte('next_prompt_date', today);

      return users?.map(u => u.user_id) || [];
    } catch (error) {
      console.error('Error getting users ready for new prompt:', error);
      return [];
    }
  }

  /**
   * Update all users to new prompts for the week
   */
  async updateAllUsersToNewPrompt(): Promise<void> {
    try {
      console.log('Starting weekly prompt update...');
      
      const users = await this.getUsersReadyForNewPrompt();
      console.log(`Found ${users.length} users ready for new prompt`);

      let successCount = 0;
      let failureCount = 0;

      for (const userId of users) {
        const success = await this.advanceToNextPrompt(userId);
        if (success) {
          successCount++;
        } else {
          failureCount++;
        }
      }

      console.log(`Weekly prompt update complete: ${successCount} successful, ${failureCount} failed`);
    } catch (error) {
      console.error('Error in updateAllUsersToNewPrompt:', error);
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
      const supabase = await this.getSupabase();
      
      const { data: progress } = await supabase
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
