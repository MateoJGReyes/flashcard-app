"use client"
import Image from "next/image";
import { AppSideBar } from "@/components/appSideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

type Deck = {
  id: number;
  deckName: string | null;
  deckAmount: number,
  amountNew: number,
  amountRelearn: number,
  amountReview: number;
};

export default function Home() 
{
  const [ecks, setEcks] = useState<Deck[]>([]);
  useEffect(() => {
    async function fetchDecks() 
    {
      const res = await fetch("/api/decks");
      const decks = await res.json();
      const ecksa = decks.map((d: Deck) => ({
        id: d.id,
        deckName: d.deckName ?? "Unknown",
        deckAmount: d.deckAmount,
        amountNew: d.amountNew,
        amountRelearn: d.amountRelearn,
        amountReview: d.amountReview
      }));
      setEcks(ecksa);
    }
    fetchDecks();
  }, []);
    const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <AppSideBar />
        <main className="flex align-top ml-64 gap-[100px] row-start-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ecks.map((eck, id) => (
                <Link key={id} href={`/decks/${id}`} className="border hover:cursor-pointer rounded-md p-8 leading-8">
                    <h1>Name: {eck.deckName}</h1> 
                    <h3>Total: {eck.deckAmount}</h3>
                    <h3>New: {eck.amountNew}</h3>
                    <h3>Relearn: {eck.amountRelearn}</h3>
                    <h3>Review: {eck.amountReview}</h3>
                </Link>
            ))}
        </main>
        <footer className="row-start-3 flex ml-64 gap-[24px] flex-wrap items-center justify-center">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
            />
            Learn
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
            />
            Examples
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Go to nextjs.org →
            </a>
        </footer>
        </div>
  );
}