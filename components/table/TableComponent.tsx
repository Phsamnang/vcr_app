import {flexRender, getCoreRowModel, useReactTable,} from "@tanstack/react-table";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";

export default function TableComponent({data, columns}) {
    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
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
                        table?.getRowModel()?.rows.map(row => (
                            <TableRow key={row.id}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
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