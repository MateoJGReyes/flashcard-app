"use client"
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import argon2 from 'argon2';
import { useState } from "react";
export default function Home() {
 

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
  
 /*const [pas, setPas] = useState("");
 const [setty, setSetty] = useState("");
 async function handleSubmit() 
  {
    const res = await fetch("/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pas }),
    });
    const data = await res.json();
    setSetty(data.passwordHash);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <input
        id="password"
        type="text"
        value={pas}
        onChange={(e) => setPas(e.target.value)}
        className="border border-neutral-300 rounded px-3 py-1 w-64"
        placeholder="Enter password"
      />
      <button
        id="submit"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
      >
        Submit
      </button>
      <h1 id="hash" className="break-all text-sm text-neutral-600 max-w-md text-center">
        {setty}
      </h1>
    </div>
  )*/
}
