'use client'
import {useParams, useSearchParams} from "next/navigation";
import {NavBarMenu} from "@/components/navbar/NavBarMenu";
import Table from "@/components/card/Table";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {tableService} from "@/service/table.service";
import {useEffect, useState} from "react";
import {saleService} from "@/service/sale.service";
import {Button} from "antd";
import {UsergroupAddOutlined} from "@ant-design/icons";
import OrderDetials from "@/app/order/OrderDetials";

const Item = () => {
    const {id} = useParams()
    const param = useSearchParams();
    const tableId = param.get("table")
    const useClient = useQueryClient()
    const {data, isLoading} = useQuery({
        queryFn: () => tableService.getTable(),
        queryKey: ['table']
    })
    useEffect(() => {
        useClient.invalidateQueries({queryKey: ['allItems']})
    }, [param]);
    console.log("value id ",tableId)
    const query = useQuery({
        queryFn: () => saleService.getOrderByTable(tableId),
        queryKey: ['allItems',tableId]
    })
    console.log(" data all ", query.data)
    /* useEffect(() => {

     }, [tableId]);*/
    const {mutate: createOrder} = useMutation({
        mutationFn: () => saleService.createSale(tableId),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ['table']
            });

        }

    })
    if (isLoading) return <span>សូមរងចាំ...</span>
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <Table data={data}/>
                    {
                        query.data ? <OrderDetials data={query.data}/> : ""
                    }

                </div>
                <div className="col-sm-7">
                    {tableId == undefined ? "" :
                        query.data ? <NavBarMenu/> :
                            <Button className="align-middle" type="primary"
                                    onClick={() => createOrder()}><UsergroupAddOutlined/>ភ្ញៀវថ្មី</Button>

                    }

                </div>
            </div>

            {/*   {
                data?.map(d=>(
                    <ItemCard data={d}/>
                ))
            }*/}


        </div>

    </>
}
export default Item