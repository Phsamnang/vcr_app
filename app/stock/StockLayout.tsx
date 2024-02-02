'use client'
import {ReactNode, useEffect} from "react";
import NavBarProduct from "@/components/navbar/NavBarProduct";

interface Props{
    children:ReactNode|ReactNode[]
}
export default function StockLayout({children}:Props){

    return <>
    <NavBarProduct/>
        {children}
    </>
}