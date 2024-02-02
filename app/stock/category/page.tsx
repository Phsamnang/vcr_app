import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalCategory from "@/app/stock/category/ModalCategory";

export default function Home(){
    return<>
        <StockLayout>
         <ModalCategory/>
        </StockLayout>


    </>
}