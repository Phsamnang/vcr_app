import NextAuth from "next-auth";
declare module "next-auth"{
    interface Session{
        user:{
            fistName:string
            lastName:string
            email: string
            token:string
        }
    }
}