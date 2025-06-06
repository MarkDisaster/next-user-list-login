import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryClientProviderWrapper from "@/features/api/queryClientProviderWrapper";
import { ModalProvider } from "@/features/components/UI/Modal/context";
import { Modal } from "@/features/components/UI/Modal";

import "./globals.css";
import { NextAuthProvider } from "@/features/auth/provider";
import { twMerge } from "tailwind-merge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User List App",
  description: "User List + Login",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={twMerge(
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
      >
        <NextAuthProvider>
          <QueryClientProviderWrapper>
            <ModalProvider>
              <main className="flex justify-center w-full text-gray-900 text-sm">
                {children}
                <Modal />
              </main>
            </ModalProvider>
          </QueryClientProviderWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = "auto";
