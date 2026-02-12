import { NextResponse } from 'next/server';

export async function GET() {
    const email = process.env.EMAIL_ADDRESS || "MISSING";
    const pass = process.env.GMAIL_PASSKEY || "MISSING";

    return NextResponse.json({
        email: email,
        // Show first/last chars to verify without exposing full secret
        passStart: pass.length > 2 ? pass.substring(0, 3) : "??",
        passEnd: pass.length > 2 ? pass.substring(pass.length - 3) : "??",
        passLength: pass.length,
        // Check for whitespace characters explicitly
        hasNewlineEnv: email.includes('\n') || pass.includes('\n'),
        hasSpaceEnv: email.includes(' ') || pass.includes(' '),
        timestamp: new Date().toISOString(),
        message: "Check if passStart matches 'kbz' and passEnd matches 'qib'. If not, Vercel vars are still old."
    });
}
