'use client'
import React, {useRef, useState} from 'react';
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
import {Button, Input, Space} from "antd";
import {SaleStatus} from "@/libs/types/SaleStatus";

const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});

const OrderDetials = ({data, mutate}: any) => {
    // console.log(data)
    const useClient = useQueryClient();
    const [amount, setAmount]:any = useState(0)
    const removeItem = useMutation({
        mutationFn: (id: any) => saleService.removeItem(id),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ["allItems"]
            })
        }
    })
    const {mutate: payment} = useMutation({
        mutationFn: () => saleService.payment(data.saleId, amount),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ["allItems"]
            })
        },
        onError: (e) => {
            console.log(e)
        }
    })
    const {mutate: finishOrder} = useMutation({
        mutationFn: () => saleService.finishOrder(data.tableName),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ["allItems"]
            })
            useClient.invalidateQueries({
                queryKey: ["table"]
            })
        },
        onError: (e) => {
            console.log(e)
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
                        {/*  <div className="panel-heading">
                            <h5 className="panel-title">
                                <strong>តុ {data?.tableName}</strong>
                            </h5>
                        </div>*/}
                        <div className="panel-body">
                            <div className="table-responsive">{
                                data.orders.length != 0 ? <table className="table table-condensed">
                                    <thead>
                                    <tr>
                                        < th scope="col">ឈ្មោះ</th>
                                        <th scope="col">តម្លៃ</th>
                                        <th scope="col">ចំនួន</th>
                                        <th scope="col">សរុប</th>
                                        <th scope="col">STATUS</th>
                                        {/*<th scope="col">ACTION</th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* foreach ($order->lineItems as $line) or some such thing here */}
                                    {
                                        data?.orders.map((item: any) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <tr>
                                                <td className="text-nowrap">{item.item}</td>
                                                <td className="text-nowrap">{UtilCurrency.RielCurrency(item.price)}</td>
                                                <td>{item.QTY}</td>
                                                <td className="text-nowrap">{UtilCurrency.RielCurrency(item.amount)}</td>
                                                <td>
                                                    <Space>

                                                        <span className="ml-2">{item.status}</span>
                                                        <button type="button"
                                                                className="btn btn-danger btn-sm px-3 mr-2"
                                                                onClick={() => removeItem.mutate(item.id)}>
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </button>

                                                    </Space>
                                                </td>
                                                {/*<td>

                                                </td>*/}
                                            </tr>
                                        ))
                                    }

                                    <tr>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        {/*<td className="thick-line"/>*/}
                                        <td className="thick-line text-center">
                                            <strong>សរុប</strong>
                                        </td>
                                        <td className="thick-line text-right">
                                            <Space>
                                                <Input size="large" style={
                                                    {
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        width: 130
                                                    }
                                                } value={UtilCurrency.RielCurrency(data?.totalAmount)} disabled={true}/>
                                                <Button
                                                    type="primary" style={{
                                                    backgroundColor: "#24AF5D"
                                                }}
                                                    onClick={handlePrint}
                                                >
                                                    <FontAwesomeIcon icon={faPrint}/>ព្រីន
                                                </Button>

                                            </Space>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        <td className="thick-line"/>
                                        {/*<td className="thick-line"/>*/}
                                        <td className="thick-line text-center">
                                            <strong>{data.status == SaleStatus.PAID ? " " : "ទទួល"}</strong>
                                        </td>
                                        <td className="thick-line text-right text-nowrap">
                                            {
                                                data.status == SaleStatus.PAID ? <Button
                                                        type="primary"
                                                        onClick={() => {
                                                            finishOrder()
                                                        }}
                                                    >
                                                        បញ្ចប់ការកម្មង
                                                    </Button> :
                                                    <Space>
                                                        <Input onChange={(e) => setAmount(e.target.value)}/>
                                                        <Button
                                                            type="primary"
                                                            onClick={() => payment()}
                                                        >
                                                            ទូទាត់
                                                        </Button>
                                                    </Space>


                                            }


                                        </td>
                                    </tr>
                                    </tbody>
                                </table> : <span className="text-danger">មិនទាន់មានការកម្មង</span>
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visually-hidden">
                <div ref={componentRef}>
                    <Invoice data={data}/>
                </div>
            </div>


        </div>
    )
        ;
};

export default OrderDetials;