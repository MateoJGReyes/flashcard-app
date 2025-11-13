'use client';

import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { serializeJsonQuery } from "@/generated/prisma/runtime/library";

type LogInfo = {
  id: number,
  email: string,
  username: string,
  passwordHash: string
  createdAt: Date;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [inEmail, setEmail] = useState("");
  const [inPassword, setPassword] = useState("");
  
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    const res = await fetch("/api/login", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: inEmail, password: inPassword }),
      });

    const data = await res.json();

    if (data.ok) 
    {
      console.log("Login successful!", data.user);
      router.push('/decks');
    } 
    else 
    {
      console.error("Error:", data.error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 text-center", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username or email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username/Email</Label>
                <Input
                  id="email"
                  type="input"
                  placeholder="example/m@example.com"
                  value={inEmail}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="water" 
                  value={inPassword}
                  required 
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full  text-neutral-800">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}