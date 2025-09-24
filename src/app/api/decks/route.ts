import { prisma } from "@/lib/prisma";

export async function GET() {
  const decks = await prisma.deck.findMany();
  return new Response(JSON.stringify(decks));
}