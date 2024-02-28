import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalProduct from "@/app/stock/product/ModalProduct";
import TableProducts from "@/app/stock/product/TableProducts";
import React from "react";

export default function Home(){
    return <>

        <StockLayout title="Product">
            <ModalProduct/>
            <TableProducts/>
        </StockLayout>


    </>
}