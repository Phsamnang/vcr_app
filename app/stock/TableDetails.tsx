import React from 'react';
import {ColumnDef} from "@tanstack/react-table";
import {Product} from "@/libs/types/Product";
import TableComponent from "@/components/table/TableComponent";

const TableDetails = ({data}: any) => {
    const columns: ColumnDef<Product>[] = [

        {
            header: "ឈ្មោះ",
            accessorKey: "productName",
            cell: (props) => <p>{props.getValue()}</p>
        }
        , {
            header: "ប្រភេទ",
            accessorKey: "category",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
        {
            header: "ចំនួន",
            accessorKey: "QTY",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
        {
            header: "តម្លៃ",
            accessorKey: "amount",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
    ]
    return (
        <div>
            <TableComponent data={data} columns={columns}/>
        </div>
    );
};

export default TableDetails;