'use client';

import { Calendar, FileStack, Pencil, Search, Settings, View } from "lucide-react"
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
    url: "/decks",
    icon: FileStack,
  },
  {
    title: "Edit",
    url: "/edit",
    icon: Pencil,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Browse",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
export function AppSideBar()
{
return (
    <div>
        
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="hover:bg-neutral-800 rounded-md">
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    </div>
    )
}