"use client"
import Image from "next/image";
import { useState, use } from "react";
import { AppSideBar } from "@/components/appSideBar";
import { Calendar, FileStack, Pencil, Search, Settings, ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"
import { Navbar } from "@/components/navbar";

const items = [
  {
    title: "Decks",
    url: "dashboard",
    icon: FileStack,
  },
  {
    title: "Edit",
    url: "#",
    icon: Pencil,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
const ecks = [
  {
    id: 0,
    cardQuestion: 'この連続小説の最終回は, (    ) どうなるのだろうか。1: いっそう  2: たしか  3: なにぶん  4: はたして',
    cardAnswer: "4. はたして"
  },
  {
    id: 0,
    cardQuestion: 'このs連続小説の最終回は, (    ) どうなるのだろうか。1: いっそう  2: たしか  3: なにぶん  4: はたして',
    cardAnswer: "4. はsたして"
  },
  {
    id: 1,
    cardQuestion: "What base is binary",
    cardAnswer: "2"
  },
  {
    id: 2,
    cardQuestion: "my mother had a b",
    cardAnswer: "thats cool"
  },
  {
    id: 3,
    cardQuestion: "water in",
    cardAnswer: "bwaoi"
  },
  {
    id: 4,
    cardQuestion: "ssbb",
    cardAnswer: "ultimate"
  }
]
export default function Home({ params }: { params: Promise<{ id: string }> }) {
  const [side, setSide] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [index, setIndex] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const { id } = use(params);
  const numericId = Number(id);
  const eck = ecks.filter((eck) => eck.id === numericId);
  
  const handleFlip = () => 
  {
    setSide((prev) => !prev);
    if(!showButtons)
    {
      setShowButtons(true);
    }
  }

  const handleNextCard = () =>
  {
    if(index === eck.length - 1)
    {
      setShowEnd((prev) => !prev);
    }
    else
    {
      setSide((prev) => !prev);
      setShowButtons(false);
      setIndex((prev) => prev + 1);
    }
  }

  return (
    <>
      <div>
        <Navbar toggleSidebar={() => setIsSidebarCollapsed(prev => !prev)}/>
      </div>
      
      <div className="flex grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <AppSideBar isCollapsed={isSidebarCollapsed} />
        { showEnd ? (
          <div className={`${ isSidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-200`}>End screen</div>
        ) : (
          <>
            <main onClick={handleFlip}
            className={`w-250 h-150 border border-5 p-20 flex rounded-xl items-center justify-center font-[family-name:var(--font-geist-sans)] overflow-hidden ${ isSidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-200`}>
            <h1 className="text-[50px]">{side === true ? eck?.[index].cardQuestion : eck?.[index].cardAnswer}</h1>
            </main>
            {showButtons && (
            <div className={`flex items-center justify-items-center text-xl ${ isSidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-200`}>
                <button onClick={handleNextCard} className="border-neutral-800 bg-red-800 rounded-xl w-32 px-10 py-5 mr-10">bad</button>
                <button onClick={handleNextCard} className="border-neutral-800 bg-green-800 rounded-xl w-32 px-9 py-5">good</button>
            </div>
            )}
          </>
        )}
      </div>
    </>
  );
}