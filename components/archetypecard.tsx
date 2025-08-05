// components/ArchetypeCard.tsx
type Archetype = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default function ArchetypeCard({ archetype }: { archetype: Archetype }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 p-4 text-center">
      <img
        src={archetype.image}
        alt={archetype.name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-indigo-500"
      />
      <h3 className="mt-4 text-xl font-bold">{archetype.name}</h3>
      <p className="text-gray-600 mt-2 text-sm">{archetype.description}</p>
    </div>
  );
}
