import { NextResponse } from 'next/server';

export async function GET() {
    const email = process.env.EMAIL_ADDRESS || "MISSING";
    const pass = process.env.GMAIL_PASSKEY || "MISSING";

    return NextResponse.json({
        email: email,
        passLength: pass.length,
        passStart: pass.length > 2 ? pass.substring(0, 2) : "??",
        passEnd: pass.length > 2 ? pass.substring(pass.length - 2) : "??",
        nodeEnv: process.env.NODE_ENV,
        message: "If these values do not match your local .env file, update your Vercel Environment Variables."
    });
}
