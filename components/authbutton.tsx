"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";

export default function AuthButton() {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-4 right-4 z-50">
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton mode="modal">
          <button className="px-4 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition">
            Sign In
          </button>
        </SignInButton>
      )}
    </div>
  );
};