"use client"
import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalProduct from "@/app/stock/product/ModalProduct";
import FormMenu from "@/app/stock/menu/FormMenu";
import TableProducts from "@/app/stock/product/TableProducts";

export default function Home() {
    return <>
        <StockLayout title="Menu">
            <div className="row mt-2">
                <div className="col-sm-4">
                    <FormMenu/>
                </div>
                <div className="col-sm-8">
                    <TableProducts/>
                </div>


            </div>


        </StockLayout>
    </>
}