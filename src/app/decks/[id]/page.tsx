"use client"
import Image from "next/image";
import { useState } from "react";
import { AppSideBar } from "@/components/appSideBar";
import { Calendar, FileStack, Pencil, Search, Settings, ArrowLeft } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import 
{
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
    cardQuestion: "why did the chicken cross the road?",
    cardAnswer: "hey bro"
  },
  {
    id: 1,
    cardQuestion: "interesting",
    cardAnswer: "yeah"
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
export default function Home({ params }: { params: { id: string } }) 
{
  const [side, setSide] = useState(1);
  const handleSides = () => 
  {
      setSide((prev) => (prev === 1 ? 2 : 1));
  }
  const numericId = Number(params.id);
  const eck = ecks.find((eck) => eck.id === numericId);
  return (
    <div className="flex grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AppSideBar />
    <main onClick={handleSides}
    className="border ml-64 p-8 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-[50px]">{side === 1 ? eck?.cardQuestion : eck?.cardAnswer}</h1> 
    </main>
    <div className="ml-64 p-8 font-[family-name:var(--font-geist-sans)]">
      <h1>
        osu how {params.id}
      </h1>
    </div>
    </div>
  );
}