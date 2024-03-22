"use client"
import React, {ReactNode, useEffect} from "react";
import NavBarProduct from "@/components/navbar/NavBarProduct";

interface Props{
    children:ReactNode|ReactNode[],
    title:string
}
export default function StockLayout({children,title}:Props){

    return <>
        <head>
            <title>{title}</title>
        </head>
        <NavBarProduct/>
        {children}
    </>
}