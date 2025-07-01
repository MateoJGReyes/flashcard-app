"use client"
import Image from "next/image";
import { Calendar, FileStack, Pencil, Search, Settings, View } from "lucide-react"
import { useRouter } from "next/navigation";
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
    id: 1,
    deckName: "Japanese N5",
    deckAmount: 200,
    amountNew: 30,
    amountRelearn: 5,
    amountReview: 40
  },
  {
    id: 2,
    deckName: "Computer Science",
    deckAmount: 150,
    amountNew: 20,
    amountRelearn: 3,
    amountReview: 25
  },
  {
    id: 3,
    deckName: "GRE Vocab",
    deckAmount: 300,
    amountNew: 40,
    amountRelearn: 10,
    amountReview: 50
  },
  {
    id: 4,
    deckName: "History Facts",
    deckAmount: 120,
    amountNew: 10,
    amountRelearn: 2,
    amountReview: 15
  },
  {
    id: 5,
    deckName: "Spanish Basics",
    deckAmount: 180,
    amountNew: 25,
    amountRelearn: 4,
    amountReview: 30
  }
]
export default function Home() 
{
    const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        osu how
        </div>
  );
}