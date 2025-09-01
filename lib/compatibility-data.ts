// lib/compatibility-data.ts
import { CompatibilityReport } from '@/types/compatibility';

// This is a template structure for all 66 compatibility reports
// You can populate this with the actual content for each character combination

export const compatibilityReports: Record<string, CompatibilityReport> = {
  // Example: Snow White × Cinderella
  'snowwhite-cinderella': {
    id: 'snowwhite-cinderella',
    character1: 'Snow White',
    character2: 'Cinderella',
    character1Id: 'snowwhite',
    character2Id: 'cinderella',
    title: 'Innocence Meets Endurance — Two Hearts of Kindness',
    subtitle: 'When Snow White and Cinderella meet, there\'s an immediate recognition of shared sweetness.',
    compatibilityScore: 80,
    relationshipType: 'Gentle Harmony',
    summary: 'Both archetypes embody purity and kindness, though expressed differently: Snow White\'s innocence shines in her trusting heart, while Cinderella\'s endurance shows in her quiet patience under hardship.',
    strengths: [
      'Empathy & Understanding → Both naturally forgive and comfort each other, avoiding cruelty.',
      'Shared Values → Loyalty, family, and harmony matter deeply to both.',
      'Mutual Gentleness → They provide a safe haven where neither fears judgment.',
      'Emotional Healing → Cinderella reassures Snow White\'s fears, while Snow White lightens Cinderella\'s burdens.'
    ],
    challenges: [
      'Over-Passivity → Both tend to endure rather than confront. They may stay too long in toxic dynamics without pushing for change.',
      'Lack of Initiative → Neither archetype is naturally bold — together they risk "waiting for rescue."',
      'Suppressed Frustration → Their politeness can hide resentment if they avoid tough conversations.'
    ],
    communication: 'Gentle and empathetic, but may avoid difficult conversations.',
    emotionalConnection: 'Deep emotional understanding and mutual comfort.',
    sharedValues: 'Loyalty, family, harmony, and kindness.',
    growthPotential: 'Learning to balance kindness with courage and taking initiative.',
    advice: [
      'Practice Small Acts of Boldness → Try making decisions without waiting for outside approval — even small choices like planning a trip or starting a project.',
      'Balance Care with Courage → Kindness is their gift, but courage is their lesson. Supporting each other in taking risks builds strength.',
      'Journal Prompt: Snow White types: "Where do I avoid action out of fear of conflict?" Cinderella types: "Where am I waiting for recognition instead of claiming it myself?"'
    ],
    keywords: ['gentle', 'harmonious', 'empathetic', 'patient', 'loyal', 'kind']
  },

  // Template for other combinations - you can copy and modify this structure
  'snowwhite-aurora': {
    id: 'snowwhite-aurora',
    character1: 'Snow White',
    character2: 'Aurora',
    character1Id: 'snowwhite',
    character2Id: 'aurora',
    title: '[Title for Snow White × Aurora]',
    subtitle: '[Subtitle for this combination]',
    compatibilityScore: 75,
    relationshipType: '[Relationship Type]',
    summary: '[Summary of their dynamic]',
    strengths: [
      '[Strength 1]',
      '[Strength 2]',
      '[Strength 3]',
      '[Strength 4]'
    ],
    challenges: [
      '[Challenge 1]',
      '[Challenge 2]',
      '[Challenge 3]'
    ],
    communication: '[Communication style analysis]',
    emotionalConnection: '[Emotional connection insights]',
    sharedValues: '[Shared values assessment]',
    growthPotential: '[Growth potential for the relationship]',
    advice: [
      '[Advice 1]',
      '[Advice 2]',
      '[Journal prompt for both types]'
    ],
    keywords: ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5', 'keyword6']
  },

  // Continue this pattern for all 66 combinations...
  // You can use the generateCompatibilityIds() function to get all combinations
  // and then populate each one with the appropriate content
};

// Helper function to get a compatibility report
export const getCompatibilityReport = (id: string): CompatibilityReport | null => {
  return compatibilityReports[id] || null;
};

// Helper function to get all compatibility reports
export const getAllCompatibilityReports = (): CompatibilityReport[] => {
  return Object.values(compatibilityReports);
};
