'use client'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable,} from "@tanstack/react-table";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";
import Category from "@/libs/types/Category";

export default function TableCategory() {
    const columns: ColumnDef<Category>[] = [
        {
            header: "ID",
            accessorKey: "categoryId",
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: "Name",
            accessorKey: "categoryName",
            cell: (props) => <p>{props.getValue()}</p>
        }
    ]
    const {data,isLoading,isError} = useFetchAllCategories()

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {isError}</p>;
    return <div>
        <TableContainer component={Paper}>
            <Table sx={{maxWidth: 650}} aria-label="simple table">
                <TableHead>
                    {
                        table.getHeaderGroups().map(hg => (
                            <TableRow key={hg.id}>
                                {
                                    hg.headers.map(h => (
                                        <TableCell key={h.id}>
                                            {h.column.columnDef.header}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableHead>
                <TableBody>
                    {
                        table?.getRowModel()?.rows.map(row=>(
                            <TableRow key={row.id}>
                                {
                                    row.getVisibleCells().map(cell=>(
                                        <TableCell key={cell.id}>
                                            {
                                              flexRender(cell.column.columnDef.cell,cell.getContext())
                                            }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}