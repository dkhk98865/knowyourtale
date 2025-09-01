// types/compatibility.ts
export interface CompatibilityReport {
  id: string;
  character1: string;
  character2: string;
  character1Id: string;
  character2Id: string;
  title: string;
  subtitle: string;
  compatibilityScore: number; // 1-100
  relationshipType: string;
  summary: string;
  strengths: string[];
  challenges: string[];
  communication: string;
  emotionalConnection: string;
  sharedValues: string;
  growthPotential: string;
  advice: string[];
  keywords: string[];
}

// Generate all 66 compatibility combinations (12 choose 2 = 66)
export const generateCompatibilityIds = () => {
  const characterIds = [
    'snowwhite', 'cinderella', 'aurora', 'ariel', 'belle', 'rapunzel',
    'gerda', 'mulan', 'alice', 'dorothy', 'wendy', 'littleredridinghood'
  ];
  
  const combinations: { character1Id: string; character2Id: string; id: string }[] = [];
  
  for (let i = 0; i < characterIds.length; i++) {
    for (let j = i + 1; j < characterIds.length; j++) {
      const char1 = characterIds[i];
      const char2 = characterIds[j];
      const id = `${char1}-${char2}`;
      combinations.push({
        character1Id: char1,
        character2Id: char2,
        id
      });
    }
  }
  
  return combinations;
};

// Character name mapping
export const characterNames: Record<string, string> = {
  snowwhite: 'Snow White',
  cinderella: 'Cinderella',
  aurora: 'Aurora',
  ariel: 'Ariel',
  belle: 'Belle',
  rapunzel: 'Rapunzel',
  gerda: 'Gerda',
  mulan: 'Mulan',
  alice: 'Alice',
  dorothy: 'Dorothy',
  wendy: 'Wendy',
  littleredridinghood: 'Little Red Riding Hood'
};

// Character descriptions for compatibility context
export const characterDescriptions: Record<string, string> = {
  snowwhite: 'Innocence that outlived envy.',
  cinderella: 'From ashes to royalty.',
  aurora: 'A cursed slumber, awakened by destiny.',
  ariel: 'Love at the cost of self.',
  belle: 'Love that sees beyond appearances.',
  rapunzel: 'Freedom found in a towered prison.',
  gerda: 'Love that defies the coldest magic.',
  mulan: 'Honor forced in borrowed armor.',
  alice: 'A girl who questioned the world--and made her own.',
  dorothy: 'A storm swept her away, but she found her way home with courage.',
  wendy: 'A storyteller who mothered the lost and remembered the way home.',
  littleredridinghood: 'Curiosity led her into darkness--and back out wiser.'
};
