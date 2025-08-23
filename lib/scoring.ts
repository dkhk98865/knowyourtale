export type CharacterKey =
  | "SW" | "CIN" | "AUR"
  | "ARI" | "ALI" | "LRR"
  | "BEL" | "RAP" | "WEN"
  | "GER" | "MUL" | "DOR";

export const CHAR: Record<CharacterKey, string> = {
  SW: "Snow White",
  CIN: "Cinderella",
  AUR: "Aurora",
  ARI: "Ariel",
  ALI: "Alice",
  LRR: "Little Red Riding Hood",
  BEL: "Belle",
  RAP: "Rapunzel",
  WEN: "Wendy",
  GER: "Gerda",
  MUL: "Mulan",
  DOR: "Dorothy",
};

// Per-question mapping: index 0..7 for Q1..Q8; each has A,B,C,D → character
export const MAP: Array<Record<"A"|"B"|"C"|"D", CharacterKey>> = [
  { A: "SW",  B: "ARI", C: "BEL", D: "MUL" }, // Q1
  { A: "CIN", B: "ALI", C: "RAP", D: "DOR" }, // Q2
  { A: "AUR", B: "LRR", C: "WEN", D: "GER" }, // Q3
  { A: "AUR", B: "ARI", C: "RAP", D: "GER" }, // Q4
  { A: "SW",  B: "ALI", C: "BEL", D: "MUL" }, // Q5
  { A: "CIN", B: "ALI", C: "RAP", D: "DOR" }, // Q6
  { A: "SW",  B: "LRR", C: "WEN", D: "MUL" }, // Q7
  { A: "CIN", B: "ARI", C: "BEL", D: "MUL" }  // Q8
];

export function scoreQuiz(answers: Array<"A"|"B"|"C"|"D">) {
  const tally: Record<CharacterKey, number> = {
    SW:0,CIN:0,AUR:0,ARI:0,ALI:0,LRR:0,BEL:0,RAP:0,WEN:0,GER:0,MUL:0,DOR:0
  };

  answers.forEach((choice, i) => {
    const picked = MAP[i][choice];
    tally[picked] += 1;
  });

  const max = Math.max(...Object.values(tally));
  const top = (Object.entries(tally) as Array<[CharacterKey, number]>)
    .filter(([,v]) => v === max)
    .map(([k]) => k);

  if (top.length === 1) {
    const winner = top[0];
    return { winner, name: CHAR[winner], tally };
  }

  // Tie-break by priority questions: Q8 -> Q1 -> Q2 (indices 7,0,1)
  for (const qi of [7,0,1]) {
    const picked = MAP[qi][answers[qi]];
    if (top.includes(picked)) {
      return { winner: picked, name: CHAR[picked], tally };
    }
  }

  // deterministic fallback
  const winner = top.sort()[0];
  return { winner, name: CHAR[winner], tally };
}
