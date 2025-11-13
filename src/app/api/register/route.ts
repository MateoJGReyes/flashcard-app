import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import argon2 from 'argon2';

export async function POST(request: NextRequest)
{
    try
    {
        const {email, username, password} = (await request.json()) as 
        {
            email: string;
            username: string;
            password: string;
        };

        if(!email || !password)
            return NextResponse.json({ error: 'One of the fields is not complete' }, { status: 400 });

        const passwordHash = await argon2.hash(password,
            {
                type: argon2.argon2id,
                timeCost: 2,
                memoryCost: 2 ** 16,
                parallelism: 1,
            }
        );
        const user = await prisma.user.create(
            {
                data: { email, username, passwordHash },
            }
        );

        return NextResponse.json({email: email, username: username, passwordHash: passwordHash}, { status: 201 });
    }
    catch(err: any)
    {
        console.error(err);
        return NextResponse.json({ error: 'Server Error'}, { status: 500 });
    }
}