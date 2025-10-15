'use client';

import { Calendar, FileStack, Pencil, Search, Settings, Menu } from "lucide-react"
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
interface AppSideBarProps {
  isCollapsed: boolean;
}

export function AppSideBar({ isCollapsed }: AppSideBarProps)
{
  return (
      <div>
          <SidebarProvider>
              <Sidebar className={`${ isCollapsed ? "w-16" : "w-64"}`}>
                  <SidebarContent>
                      <SidebarGroup>
                          <SidebarGroupContent>
                              <SidebarMenu>
                              {items.map((item) => (
                                  <SidebarMenuItem key={item.title} className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pl-3 rounded-md">
                                      <SidebarMenuButton asChild>
                                          <a href={item.url}>
                                            <item.icon className="w-6 h-6 md:w-8 md:h-8"/>
                                            {!isCollapsed && <span>{item.title}</span>}
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