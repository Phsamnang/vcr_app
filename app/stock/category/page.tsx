import {SideBar} from "@/components/sidbar/SideBar";
import StockLayout from "@/app/stock/StockLayout";
import ModalCategory from "@/app/stock/category/ModalCategory";
import TableCategory from "@/app/stock/category/TableCategories";

export default function Home(){
    return<>
        <StockLayout>
         <ModalCategory/>
            <TableCategory/>
        </StockLayout>
    </>
}