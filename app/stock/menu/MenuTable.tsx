import React from 'react';
import {ColumnDef} from "@tanstack/react-table";
import {Product} from "@/libs/types/Product";
import ModalStock from "@/app/stock/product/ModalPrice";

const MenuTable = () => {
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
        },
        {
            header: "Riel Price",
            accessorKey: "rielPrice",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
        {
            header: "USD Price",
            accessorKey: "usdPrice",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
        {
            header: "Stock Quantity",
            accessorKey: "stockQty",
            cell: (props) => <>
                {props.getValue()}
            </>
        },
        {
            header: "Add Price",
            accessorKey: "productId",
            cell: (props) => <>
                <ModalStock productId={props.getValue()} productName={props.row.original.productName}/>
            </>
        }
    ]
    return (
        <div>

        </div>
    );
};

export default MenuTable;