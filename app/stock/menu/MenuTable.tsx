import React, {useEffect} from 'react';
import {ColumnDef} from "@tanstack/react-table";
import {Product} from "@/libs/types/Product";
import ModalStock from "@/app/stock/product/ModalPrice";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {menuService} from "@/service/menu.service";
import TableComponent from "@/components/table/TableComponent";
import {useSearchParams} from "next/navigation";
import useFetchMenus from "@/libs/hooks/fetch-all-menus";

const MenuTable = () => {
    const param=useSearchParams()

    const columns: ColumnDef<Product>[] = [

        {
            header: "ឈ្មោះ",
            accessorKey: "name",
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
            header: "តម្លៃរៀល",
            accessorKey: "rielPrice",
            cell: (props) => <>
                {props.getValue()} រៀល
            </>
        },
        {
            header: "តម្លៃដុល្លា",
            accessorKey: "usdPrice",
            cell: (props) => <>
                {props.getValue()} ដុល្លា
            </>
        },
    ]
    const useClient=useQueryClient()
    const cate_id:string | null=param.get("cate_id")

    const {data,isLoading}=useFetchMenus(cate_id)

    if (isLoading) return <span>Loading .....</span>
    return (
        <div>
            <TableComponent data={data} columns={columns}/>
        </div>
    );
};

export default MenuTable;