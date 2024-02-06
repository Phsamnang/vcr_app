'use client'
import {flexRender, useReactTable,} from "@tanstack/react-table";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableCategory() {
    const columns = [
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
    const {data} = useFetchAllCategories()

    const table = useReactTable({data, columns})
    return <>
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
                       table.getRowModel().rows.map((r) => (
                            <TableRow key={r.id}>
                                {
                                    r.getVisibleCells().map(c => (
                                        <TableCell key={c.id}>
                                            {flexRender(c.column.columnDef.cell, c.getContext())}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>
}