// app/select/page.tsx

import Link from "next/link";
import Image from "next/image";
import { characters } from "@/types/characters";

export default function SelectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Fairy Tale Type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {characters.map((type) => (
          <Link
            key={type.id}
            href={`/story/${type.id}`}
            className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition duration-200"
          >
            <div className="relative w-full h-56">
              <Image
                src={type.image}
                alt={type.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{type.name}</h2>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
