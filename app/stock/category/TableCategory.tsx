'use client'
import {ColumnDef} from "@tanstack/react-table";
import Category from "@/libs/types/Category";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import React from "react";
import TableComponent from "@/components/table/TableComponent";
import {Button} from "react-bootstrap";

export default function TableCategory() {
    const columns: ColumnDef<Category>[] = [
        {
            header: "ID",
            accessorKey: "categoryId",
            cell: ({getValue}) => <p>{getValue()}</p>
        },
        {
            header: "Name",
            accessorKey: "categoryName",
            cell: (props) => <p>{props.getValue()}</p>
        }
        , {
            header: "Action",
            accessorKey: "categoryName",
            cell: (props) => <>
            <Button>Hello</Button>
            </>
        }
    ]
    const {data, isError, isLoading,error} = useFetchAllCategories()
    if (isLoading) return <>Loading...</>
    if (isError) return <>{error}</>
    return <div className="mt-3">
        <TableComponent data={data} columns={columns}/>
    </div>
}