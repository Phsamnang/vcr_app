'use client'
import useFetchEmployee from "@/libs/hooks/fetch-all-employee";
import {ColumnDef} from "@tanstack/react-table";
import Category from "@/libs/types/Category";
import React from "react";
import TableComponent from "@/components/table/TableComponent";

function Home() {
    const {data,isLoading} = useFetchEmployee()
    const columns: ColumnDef<Category>[] = [
        {
            header: "ID",
            accessorKey: "id",
            cell: ({getValue}) => <p>{getValue()}</p>
        },
        {
            header: "Name",
            accessorKey: "name",
            cell: (props) => <p>{props.getValue()}</p>
        }
        , {
            header: "Salary",
            accessorKey: "salary",
            cell: (props) => <>
                <p>{props.getValue()}</p>            </>
        }
    ]
    if (isLoading)return <>Loading....</>

    return <>
       <TableComponent data={data} columns={columns}/>
    </>
}

export default Home