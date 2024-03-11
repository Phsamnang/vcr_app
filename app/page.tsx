'use client'

import { useRouter } from "@/node_modules/next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
    const { data: session, status } = useSession()
console.log(status);

const router=useRouter()


useEffect(()=>{
    if(status=='unauthenticated') router.push('api/auth/signin')
},[status])
    
    return (
       <>
       </>
    )
}
