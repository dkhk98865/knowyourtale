"use client";

import { useMemo, useState } from "react";
import { scoreQuiz } from "@/lib/scoring";
import { characters } from "@/types/characters";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Choice = "A" | "B" | "C" | "D";

// Map scoring results to character IDs
const CHARACTER_MAP: Record<string, string> = {
  "Snow White": "snowwhite",
  "Cinderella": "cinderella", 
  "Aurora": "aurora",
  "Ariel": "ariel",
  "Belle": "belle",
  "Rapunzel": "rapunzel",
  "Gerda": "gerda",
  "Mulan": "mulan",
  "Alice": "alice",
  "Dorothy": "dorothy",
  "Wendy": "wendy",
  "Little Red Riding Hood": "littleredridinghood"
};

const QUESTIONS: {
  prompt: string;
  options: { label: string; value: Choice }[];
}[] = [
  {
    prompt: "When life gets difficult, what’s your first instinct?",
    options: [
      { label: "Stay gentle and keep believing in people", value: "A" },
      { label: "Make a bold move into the unknown", value: "B" },
      { label: "Look for the compassionate, thoughtful response", value: "C" },
      { label: "Face it head-on with courage", value: "D" }
    ]
  },
  {
    prompt: "What do you value most right now?",
    options: [
      { label: "Transformation and being seen for who I am", value: "A" },
      { label: "Curiosity and fresh perspectives", value: "B" },
      { label: "Creative expression and personal freedom", value: "C" },
      { label: "A sense of home/belonging that feels true", value: "D" }
    ]
  },
  {
    prompt: "Which scene feels like “you” today?",
    options: [
      { label: "A quiet dawn where destiny hums beneath the stillness", value: "A" },
      { label: "A trail into the woods, thrilling and a little risky", value: "B" },
      { label: "A cozy hearth where you’re gently taking care of others", value: "C" },
      { label: "A snowy road where you keep going for someone you love", value: "D" }
    ]
  },
  {
    prompt: "When you feel stuck, you tend to…",
    options: [
      { label: "Wait and trust the right moment will come", value: "A" },
      { label: "Try something daring to shake things up", value: "B" },
      { label: "Reflect, journal, create—then act", value: "C" },
      { label: "Lean on loyalty/courage and push through", value: "D" }
    ]
  },
  {
    prompt: "In a group, people look to you to be the…",
    options: [
      { label: "Peacemaker who keeps harmony", value: "A" },
      { label: "Question-asker who explores new angles", value: "B" },
      { label: "Encourager who sees the best in others", value: "C" },
      { label: "Protector/leader who stands up in tough moments", value: "D" }
    ]
  },
  {
    prompt: "Pick a symbol that resonates most:",
    options: [
      { label: "👠 Glass slipper", value: "A" },
      { label: "🔑 Golden key", value: "B" },
      { label: "🪢 Long braid", value: "C" },
      { label: "👠 Ruby slippers", value: "D" }
    ]
  },
  {
    prompt: "Your biggest challenge lately?",
    options: [
      { label: "Too trusting / gentle for my own good", value: "A" },
      { label: "Impulsive / restless when I want change fast", value: "B" },
      { label: "Over-caring for others and forgetting myself", value: "C" },
      { label: "Carrying a heavy sense of duty", value: "D" }
    ]
  },
  {
    prompt: "If fate offered you one storyline, you’d choose…",
    options: [
      { label: "Rise from hardship into my true radiance", value: "A" },
      { label: "Explore beyond the world I know", value: "B" },
      { label: "Transform others through love and insight", value: "C" },
      { label: "Fight bravely for what matters", value: "D" }
    ]
  }
];

export default function Quiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<(Choice | null)[]>(
    () => Array(QUESTIONS.length).fill(null)
  );
  const [submitting, setSubmitting] = useState(false);


  const allAnswered = useMemo(
    () => answers.every(Boolean),
    [answers]
  );

  function select(i: number, value: Choice) {
    setAnswers(prev => {
      const next = [...prev];
      next[i] = value;
      return next;
    });
  }

  async function submit() {
    if (!allAnswered) return;
    const a = answers as Choice[];
    const scored = scoreQuiz(a);
    const characterId = CHARACTER_MAP[scored.name];
    const character = characters.find(c => c.id === characterId);
    
    setSubmitting(true);

    // Optional: send to /api/submit (no-op if env vars are missing)
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: a,
          resultKey: scored.winner,
          resultName: scored.name,
          tally: scored.tally
        })
      });
    } catch {
      // ignore – still redirect
    } finally {
      setSubmitting(false);
      if (character) {
        // Redirect to the character's story page
        router.push(`/story/${character.id}?quiz=true`);
      }
    }
  }



  return (
    <main className="max-w-4xl mx-auto px-4 py-12 relative">
      {/* Magical floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
        <div className="magical-sparkle"></div>
      </div>

      <div className="parchment-content text-center mb-12">
        <div className="magical-sparkle">🔮</div>
        <h1 className="storybook-title text-5xl mb-6">Discover Your Fairy Tale Personality</h1>
        <div className="storybook-divider"></div>
        <p className="storybook-subtitle text-xl mb-8">
          Answer 8 magical questions to reveal which fairy tale character best represents your spirit
        </p>
        <div className="magical-sparkle">✨</div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
        <div className="space-y-8">
          {QUESTIONS.map((q, i) => (
            <div key={i} className="storybook-card page-turn p-8">
              <div className="text-center mb-6">
                <div className="magical-sparkle">❓</div>
                <h2 className="storybook-subtitle text-2xl mb-4">Question {i + 1} of {QUESTIONS.length}</h2>
                <div className="storybook-divider mb-4"></div>
                <p className="storybook-subtitle text-xl">{q.prompt}</p>
                <div className="magical-sparkle">✨</div>
              </div>
              
              <div className="grid gap-4">
                {q.options.map((opt, idx) => {
                  const isSelected = answers[i] === opt.value;
                  return (
                    <label 
                      key={idx} 
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'bg-accent-gold text-white shadow-lg scale-105' 
                          : 'bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md'
                      } border-2 rounded-lg p-4 text-center transition-all duration-200 ${
                        isSelected ? 'border-accent-gold' : 'border-gray-200 hover:border-accent-brown'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${i}`}
                        value={opt.value}
                        checked={isSelected}
                        onChange={() => select(i, opt.value)}
                        className="sr-only"
                      />
                      <span className="text-lg font-medium">{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="magical-button magical-glow text-xl px-10 py-5 disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={!allAnswered || submitting} 
            type="submit"
          >
            {submitting ? "🔮 Revealing Your Personality..." : "🔮 Reveal My Fairy Tale Personality"}
          </button>
          
          {!allAnswered && (
            <p className="text-gray-500 mt-4">
              Please answer all {QUESTIONS.length} questions to discover your personality type
            </p>
          )}
        </div>
      </form>

      <div className="text-center mt-16">
        <Link href="/">
          <button className="magical-button magical-glow">
            🏠 Back to Home 🏠
          </button>
        </Link>
      </div>
    </main>
  );
}
