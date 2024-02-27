import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalProduct from "@/app/stock/product/ModalProduct";

export default function Home(){
    return<>
        <StockLayout>
            <ModalProduct/>
        </StockLayout>


    </>
}