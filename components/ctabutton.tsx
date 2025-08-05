// components/CTAButton.tsx
import Link from "next/link";

export default function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md transition"
    >
      {label}
    </Link>
  );
}
