"use client"
import React, {useState} from 'react';
import {UtilCurrency} from "@/utils/UtilCurency";
import {Input} from "antd";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saleService} from "@/service/sale.service";
import toast from "react-hot-toast";

const ItemCard = ({data, saleId}: any) => {
    const useClient = useQueryClient();
    const [qty, setQty] = useState(0);
    const {mutate: order} = useMutation({
        mutationFn: (obj: any) => saleService.createOrder(obj),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ['allItems']
            })
        },
        onError: error => {
            toast.error(error?.response.data.status.message)
          //  console.log()
        }

    })

    function handleOrder(menuId: any) {
        const obj = {
            'saleId': saleId,
            'menuId': menuId,
            'qty': qty
        }
        order(obj)
    }


    return (
        <div>
            <main>

                <div className="col">

                    <div className="card h-100 shadow-sm">

                        <img
                            src={data.image}
                            className="card-img-top"
                            alt="..."
                            width="100%"
                        />
                        <div className="card-body">

                            <div className="clearfix mb-3">

                                {/*<span className="float-start badge rounded-pill bg-primary">
                ASUS Rog
              </span>{" "}*/}
                                <span
                                    className="float-end price-hp">{UtilCurrency.RielCurrency(data.rielPrice)}</span>{" "}
                            </div>

                            <h5 className="card-title">
                                {data.name}
                            </h5>
                            <div className="text-center my-4">
                                <Input type="number" style={{
                                    width: "125px",
                                    height: "50px"
                                }} className="m-2" value={qty} onChange={(e) => setQty(e.target.value)}/>
                                <button className="btn btn-warning" onClick={() => handleOrder(data.id)}>
                                    កម្មង
                                </button>
                            </div>

                        </div>

                    </div>

                </div>


            </main>
        </div>
    );
};

export default ItemCard;