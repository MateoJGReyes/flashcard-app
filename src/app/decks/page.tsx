"use client"
import Image from "next/image";
import { AppSideBar } from "@/components/appSideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";

type Deck = {
  id: number,
  deckName: string | null,
  deckAmount: number,
  amountNew: number,
  amountRelearn: number,
  amountReview: number;
};

export default function Home() {
  const [ecks, setEcks] = useState<Deck[]>([]);
  useEffect(() => {
    async function fetchDecks() {
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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  return (
    <>
      <div>
        <Navbar toggleSidebar={() => setIsSidebarCollapsed(prev => !prev)}/>
      </div>
      <div className="relative z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <AppSideBar isCollapsed={isSidebarCollapsed} />
        <main className={`align-top row-start-2 ${ isSidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-200`}>
          <div className="flex gap-[100px] grid pt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ecks.map((eck, id) => (
              <Link key={id} href={`/decks/${id}`} className="hover:cursor-pointer rounded-xl leading-8 active:bg-neutral-800 duration-100 p-5">
                <div>
                  <Image className='rounded-xl'
                    src="/images/scren.webp"
                    alt="thing"
                    width={500}
                    height={300}
                  />
                </div>
                <div className='grid grid-cols-[2fr_1fr] grid-cols-2 pt-3 font-mono'>
                  <span className='text-2xl'>{eck.deckName}</span>
                  <h3 className="text-right">{eck.deckAmount} / 1500</h3>
                  <h3>New:</h3>
                  <h3 className="text-right text-blue-500">2{eck.amountNew}</h3>
                  <h3>Relearn:</h3>
                  <h3 className="text-right text-red-500">32{eck.amountRelearn}</h3>
                  <h3>Review:</h3>
                  <h3 className="text-right text-green-500">124{eck.amountReview}</h3>
                </div>
              </Link>
            ))}
          </div>

        </main>

      </div>
    </>
  );
}