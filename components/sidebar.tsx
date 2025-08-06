'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Select Character', href: '/select' },
    // add other pages as needed
  ];

  return (
    <>
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav className="flex flex-col h-full p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Know Your Tale</h2>

          <ul className="flex flex-col space-y-4">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="block text-lg text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hamburger toggle button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </>
  );
}
