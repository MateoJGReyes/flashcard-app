'use client';

import * as React from 'react';
import Image from "next/image";
import { useId, useState } from 'react';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <header
        ref={ref}
        className={cn(
          'fixed border-b border-neutral-700 bg-neutral-950 z-100 px-4 md:px-6 w-full [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left Side */}
          <div className="gap-4">
            <Image className='rounded-xl'
              src="/images/scren.webp"
              alt="thing"
              width={50}
              height={30}
            />
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
          <div className="flex justify-end gap-4">
            {/* Add button */}
            <Button
              className="size-8 rounded-full"
              size="icon"
              aria-label="Add new item"
              onClick={(e) => {
                e.preventDefault();
                if (onAddClick) onAddClick();
              }}
            >
              <PlusIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';