
import StockLayout from "@/app/stock/StockLayout";
import ModalCategory from "@/app/stock/category/ModalCategory";

import {ColumnDef} from "@tanstack/react-table";
import Category from "@/libs/types/Category";
import React from "react";

import TableComponent from "@/components/table/TableComponent";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import TableCategory from "@/app/stock/category/TableCategory";

export default function Home(){

    return<>
        <StockLayout title="Category">
         <ModalCategory/>
          <TableCategory/>
        </StockLayout>
    </>
}