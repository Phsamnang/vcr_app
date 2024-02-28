'use client'
import {ColumnDef} from "@tanstack/react-table";
import Category from "@/libs/types/Category";
import {Button} from "react-bootstrap";
import React from "react";
import {Product} from "@/libs/types/Product";
import useFetchProducts from "@/libs/hooks/fetch-all-products";
import TableComponent from "@/components/table/TableComponent";

export default function TableProducts(){
    const columns: ColumnDef<Product>[] = [
        {
            header: "ID",
            accessorKey: "productId",
            cell: ({getValue}) => <p>{getValue()}</p>
        },
        {
            header: "Name",
            accessorKey: "productName",
            cell: (props) => <p>{props.getValue()}</p>
        }
        , {
            header: "Category",
            accessorKey: "categoryName",
            cell: (props) => <>
                {props.getValue()}
            </>
        }
    ]
    const {data,isLoading}=useFetchProducts()
if (isLoading) return <span>Loading.....</span>
    return<>
    <TableComponent data={data} columns={columns}/>
    </>
}