'use client'
import { useSession } from "next-auth/react";
import React, {PropsWithChildren} from "react";
import {useRouter} from "next/navigation";


function Protected({ children }:PropsWithChildren) {
    const { data: session, status } = useSession();
 const router =useRouter()

    if (status === "unauthenticated") {
        router.push('/signin') ;
    }



    return children; // Render protected content if user is authenticated
}
export default Protected;