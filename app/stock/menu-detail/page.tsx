"use client"
import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalProduct from "@/app/stock/product/ModalProduct";
import FormMenu from "@/app/stock/menu/FormMenu";
import TableProducts from "@/app/stock/product/TableProducts";
import MenuTable from "@/app/stock/menu/MenuTable";
import FormMenuDetail from "@/app/stock/menu-detail/FormMenuDetail";

export default function Home() {
    return <>
        <StockLayout title="Menu-detail">
            <div className="row mt-2">
                <div className="col-sm-4">
                    <FormMenuDetail/>
                </div>
                <div className="col-sm-8">

                </div>
            </div>

        </StockLayout>
    </>
}