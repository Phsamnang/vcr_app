import {flexRender, getCoreRowModel, getPaginationRowModel, useReactTable,} from "@tanstack/react-table";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";
import {any} from "prop-types";

interface PropsData {
    data: any,
    columns: any
}

export default function TableComponent({data, columns}: PropsData) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
        , getPaginationRowModel: getPaginationRowModel()
        , debugTable: true,
        initialState: {
            pagination: {
                pageSize: 5
            }
        }
    })

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

            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
                <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
          </strong>
        </span>
                {/*     <span className="flex items-center gap-1">
          | Go to page:
          <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
          />
        </span>*/}
                {/*  <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[1, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>*/}
            </div>
        </TableContainer>
    </div>
}