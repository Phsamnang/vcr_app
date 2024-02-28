import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalProduct from "@/app/stock/product/ModalProduct";
import TableProducts from "@/app/stock/product/TableProducts";

export default function Home(){
    return<>
        <StockLayout>
            <ModalProduct/>
            <TableProducts/>
        </StockLayout>


    </>
}