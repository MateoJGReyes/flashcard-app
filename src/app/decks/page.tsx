"use client"
import Image from "next/image";
import { AppSideBar } from "@/components/appSideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SearchBar } from "@/components/searchBar";
import { Navbar14 } from '@/components/ui/shadcn-io/navbar-14';

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
    <>
      <div>
        <Navbar14 />
      </div>
      <div className="relative z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
          <AppSideBar />
          <main className="align-top ml-64 row-start-2">
              {/*<div className="flex justify-center mt-2 pb-20">
                <SearchBar/>
              </div>*/}
              <div className="flex gap-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {ecks.map((eck, id) => (
                  <Link key={id} href={`/decks/${id}`} className="hover:cursor-pointer rounded-md leading-8">
                      <div>
                        <Image className='rounded-xl'
                          src="/images/scren.webp"
                          alt="thing"
                          width={500} 
                          height={300}
                        />
                      </div>
                      <div className='grid grid-cols-[2fr_1fr] grid-cols-2 pt-3 font-mono'>
                        <h1 className='text-2xl'>{eck.deckName}</h1> 
                        <h3 className="text-right">{eck.deckAmount} / 1500</h3>
                        <h3></h3>
                        <h3 className="text-right text-blue-500">2{eck.amountNew}</h3>
                        <h3></h3>
                        <h3 className="text-right text-red-500">32{eck.amountRelearn}</h3>
                        <h3></h3>
                        <h3 className="text-right text-green-500">124{eck.amountReview}</h3>
                      </div>
                  </Link>
              ))}
              </div>
              
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
    </>
  );
}