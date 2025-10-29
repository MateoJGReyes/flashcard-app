import { prisma } from "@/lib/prisma";

export async function GET() 
{
  try 
  {
    const users = await prisma.user.findMany();
    console.log("Fetched users:", users);
    return new Response(JSON.stringify(users));
  } 
  catch (error: any) 
  {
    console.error("Prisma error:", error);
    return new Response(JSON.stringify({ error: String(error) }));
  }
}