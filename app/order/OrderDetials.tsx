'use client'
import React, {useEffect, useRef, useState} from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Noto_Sans_Khmer} from '@next/font/google';
import {UtilCurrency} from "@/utils/UtilCurency";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saleService} from "@/service/sale.service";
import Invoice from "@/app/order/Invoice";
import {faPrint} from "@fortawesome/free-solid-svg-icons/faPrint";
import {useReactToPrint} from "react-to-print";

const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});

const OrderDetials = ({data, mutate}: any) => {
    const useClient = useQueryClient();
    const removeItem = useMutation({
        mutationFn: (id: any) => saleService.removeItem(id),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ["allItems"]
            })
        }
    })
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

    });
    return (
        <div className={notoSansKhmer.className}>
            {/*  <table className="table table-borderless mb-0">
                <thead>
                <tr>

                    <th scope="col">ឈ្មោះ</th>
                    <th scope="col">តម្លៃ</th>
                    <th scope="col">ចំនួន</th>
                    <th scope="col">សរុប</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">ACTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    data?.orders.map((item:any)=> (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <td>{item.item}</td>
                            <td>{item.price}</td>
                            <td>{item.QTY}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            <td>
                                <button type="button" className="btn btn-danger btn-sm px-3">
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
            <div className="d-flex justify-content-end align-items-center m-3 mb-2 p-1">
                <div className="order-calculations">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="w-px-100">Subtotal:</span>
                        <span className="text-heading">{data.totalAmount}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="w-px-100">Discount:</span>
                        <span className="text-heading mb-0">$22</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="w-px-100">Tax:</span>
                        <span className="text-heading">$30</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="w-px-100 mb-0">Total:</h6>
                        <h6 className="mb-0">$6450</h6>
                    </div>
                </div>
            </div>*/}
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5 className="panel-title">
                                <strong>តុ {data?.tableName}</strong>
                            </h5>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                    <tr>
                                        < th scope="col">ឈ្មោះ</th>
                                        <th scope="col">តម្លៃ</th>
                                        <th scope="col">ចំនួន</th>
                                        <th scope="col">សរុប</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* foreach ($order->lineItems as $line) or some such thing here */}
                                    {
                                        data?.orders.map((item: any) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <tr>
                                                <td>{item.item}</td>
                                                <td>{UtilCurrency.RielCurrency(item.price)}</td>
                                                <td>{item.QTY}</td>
                                                <td>{UtilCurrency.RielCurrency(item.amount)}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm px-3"
                                                            onClick={() => removeItem.mutate(item.id)}>
                                                        <FontAwesomeIcon icon={faTimes}/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    <tr>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        <td className="thick-line text-center">
                                            <strong>សរុប</strong>
                                        </td>
                                        <td className="thick-line text-right">{UtilCurrency.RielCurrency(data?.totalAmount)}</td>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td>
                                            <button className="btn btn-success btn-lg btn-block" onClick={handlePrint}>
                                                <FontAwesomeIcon icon={faPrint}/>Print
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visually-hidden">
                <div ref={componentRef} >
                    <Invoice data={data}/>
                </div>
            </div>


        </div>
    );
};

export default OrderDetials;