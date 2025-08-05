// components/CharacterPreview.tsx
import ArchetypeCard from "./archetypecard";
import { archetypes } from "@/types/archetypes";

export default function CharacterPreview() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Meet the Archetypes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {archetypes.slice(0, 4).map((a) => (
          <ArchetypeCard key={a.id} archetype={a} />
        ))}
      </div>
    </section>
  );
}
