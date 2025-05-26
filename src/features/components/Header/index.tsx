"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/features/components/UI/Button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const Header = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <header className="bg-gray-300 p-4 position-sticky top-0 z-50 w-full flex items-center gap-4 justify-between">
      <nav className="">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Domů
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:underline">
              Seznam uživatelů
            </Link>
          </li>
        </ul>
      </nav>
      {isAuthenticated ? (
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Odhlásit se
        </Button>
      ) : (
        <Link
          href="/login"
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Přihlásit se
        </Link>
      )}
    </header>
  );
};
