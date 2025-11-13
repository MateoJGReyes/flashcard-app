import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import argon2 from 'argon2';

export async function POST(request: NextRequest)
{
        const {login, password} = (await request.json()) as
        {
            login: string,
            password: string,
        };
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);
          
        if(!login || !password)
            return NextResponse.json({ error: 'One of the fields is not filled in correctly' }, { status: 400 });

        const user = await prisma.user.findUnique({ where: isEmail ? { email: login } : { username: login }, });

        if(!user)
            return NextResponse.json({ error: 'Invalid Credentials'}, { status: 401 })
        
        try
        {
            const isValidPassword = await argon2.verify(user.passwordHash, password);

            if(!isValidPassword)
                return NextResponse.json({ error: 'Invalid Credentials'}, { status: 401 });

            return NextResponse.json(
                { 
                    ok: true, 
                    user: {id: user.id, username: user.username} 
                });
        }
        catch(err: any)
        {
            console.error(err);
            return NextResponse.json({ error: 'Server Error'}, { status: 500 });
        }
}