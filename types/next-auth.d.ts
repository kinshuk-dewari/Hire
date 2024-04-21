import NextAuth from "next-auth"

declare module "next-auth" {
  interface User{
    username:string
  }
  interface Session {
    user: User & {
        username:string
        role:boolean
    }
    token:{
        username:string        
        role:boolean
    }
  }
}