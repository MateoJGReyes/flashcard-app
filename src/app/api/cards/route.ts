import { NextRequest, NextResponse } from 'next/server';
import argon2 from 'argon2';

export async function POST(request: NextRequest)
{
    try
    {
        const {password} = (await request.json()) as
        {
            password: string,
        };

        const passwordHash = await argon2.hash(password,
                {
                    type: argon2.argon2id,
                    timeCost: 2,
                    memoryCost: 2 ** 16,
                    parallelism: 1,
                }
            );
            
        return NextResponse.json({ok: true, passwordHash});
    }
    catch(err: any)
    {
        console.error(err);
        return NextResponse.json({ error: 'Server Error'}, { status: 500 });
    }
    
}