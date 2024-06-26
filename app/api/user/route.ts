import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from "bcrypt";
import * as z from "zod";
// define a schema for input validation 
const userSchema = z
.object({
    username:z.string().min(1,'username is required').max(100),
    email:z.string().min(1,'Email is required').email('Invalid email'),
    password:z.string().min(1,'Password is required').min(8,'Password must have more than 8 characters'),
});

export async function POST(req:Request) {
    try{
        const body = await req.json();
        const {email,username,password} = userSchema.parse(body);
        // if user already exists
        const existingUserByEmail = await db.user.findUnique({
            where:{email:email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"User with this email already exists!"},{status:409})
        }
        // if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where:{username:username}
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"User with this Username already exists!"},{status:409})
        }
        // new user 
        const hashPassword = await hash(password,10);
        const newUser = await db.user.create({
            data:{
                username,
                email,
                password:hashPassword
            }
        });
        const {password:newUserPassword,...rest}=newUser;
        return NextResponse.json({user:rest, message:"user created successfully"},{status:201});
    }
    catch(error){
        return NextResponse.json({ message:"Something went wrong"},{status:500});
   
    }
} 