import { prisma } from "@/lib/prisma";

export async function GET() 
{
  try 
  {
    const decks = await prisma.deck.findMany();
    console.log("Fetched users:", decks);
    return new Response(JSON.stringify(decks));
  } 
  catch (error: any) 
  {
    console.error("Prisma error:", error);
    return new Response(JSON.stringify({ error: String(error) }));
  }
}