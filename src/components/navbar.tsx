'use client';

import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from 'react';
import { PlusIcon, SearchIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Types
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
  searchValue?: string;
  testMode?: boolean;
  showTestMode?: boolean;
  notifications?: Array<{
    id: string;
    title: string;
    message: string;
    time: string;
    unread?: boolean;
  }>;
  onSearchChange?: (value: string) => void;
  onTestModeChange?: (enabled: boolean) => void;
  onLayoutClick?: () => void;
  onAddClick?: () => void;
  onInfoItemClick?: (item: string) => void;
  onNotificationClick?: (notificationId: string) => void;
  onSettingsItemClick?: (item: string) => void;
  toggleSidebar: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      searchPlaceholder = 'Search Local Decks',
      searchValue,
      testMode: controlledTestMode,
      showTestMode = true,
      notifications,
      onSearchChange,
      onTestModeChange,
      onLayoutClick,
      onAddClick,
      onInfoItemClick,
      onNotificationClick,
      onSettingsItemClick,
      toggleSidebar,
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <header
        ref={ref}
        className={cn(
          'fixed border-b border-neutral-700 bg-[#ffffff] dark:bg-neutral-950 z-100 px-3 w-full [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <div 
            className=" hover:bg-neutral-600 rounded-full p-3 hover:cursor-pointer"
            onClick={toggleSidebar}>
              <Menu />
            </div>
            
            <Link href="/decks/" className="flex items-center gap-2">
              <Image className='rounded-xl'
              src="/images/scren.webp"
              alt="thing"
              width={50}
              height={30}
              />
              <h1>Aniki</h1>
            </Link>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <SearchIcon 
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" 
              />
              <Input
                id={`input-${id}`}
                className="peer h-10 w-full max-w-md ps-8 pe-2"
                placeholder={searchPlaceholder}
                type="search"
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
          </div>
          
          {/* Right side */}
          <div className="flex justify-end gap-4 px-3">
            {/* Add button */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  className="size-8 rounded-full"
                  size="icon"
                  aria-label="Add new item"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onAddClick) onAddClick();
                  }}
                >
                  <Image className='rounded-full'
                  src="/images/pfp.webp"
                  alt="thing"
                  width={35}
                  height={35}
                  />
            </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-800 border-neutral-800 mt-5 mr-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=" hover:bg-neutral-700 hover:cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-neutral-700 hover:cursor-pointer">Billing</DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-neutral-700 hover:cursor-pointer">Team</DropdownMenuItem>
                <DropdownMenuItem className=" hover:bg-neutral-700 hover:cursor-pointer">Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';