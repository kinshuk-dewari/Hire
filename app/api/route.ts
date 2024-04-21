import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const getAuthenticationStatus = async (req:Request)=>{
    const session = await getServerSession(authOptions);
    return NextResponse.json({authentticated : !!session})
}