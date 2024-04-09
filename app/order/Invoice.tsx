import React from 'react';
import classes from './Invoice.module.css'
import {saleService} from "@/service/sale.service";
import {Noto_Sans_Khmer} from "@next/font/google";
import {UtilFormatDate} from "@/utils/UtilFormatDate";
import {UtilCurrency} from "@/utils/UtilCurency";

const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});
const Invoice = ({data}: any) => {

    const groupedItems = data?.orders?.reduce((acc, item) => {
        acc[item.item] = acc[item.item] || [];
        acc[item.item].push(item);
        return acc;
    }, {});

    const summedItems = Object?.entries(groupedItems).map(([item, items]) => {
        const totalQuantity = items.reduce((acc, item) => acc + item.QTY, 0);
        const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
        const price = items[0].price

        return {item, totalQuantity, totalAmount, price};
    });


    return (
        <div className={notoSansKhmer.className}>
            <div className="container">
                <div className="row">
                    <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <address>
                                    <strong>ភោជនីយដ្ឋាន ស្មោះ</strong>
                                    <br/>
                                    4, 12451 Russian Federation Blvd (110)
                                    <br/>
                                    , Phnom Penh, Cambodia
                                    <br/>
                                    <abbr title="Phone">P:</abbr> (213) 484-6829
                                </address>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                <p>
                                    <em>Date: {UtilFormatDate.formatDate(data.saleDate)}</em>
                                </p>
                                <p>
                                    <em>Receipt #: 34522677W</em>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <h1>Receipt</h1>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>#</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    summedItems?.map((i) => (
                                        <tr>
                                            <td className="col-md-9">
                                                <em>{i.item}</em>
                                            </td>
                                            <td className="col-md-1" style={{textAlign: "center"}}>
                                                {" "}
                                                {i.totalQuantity} {" "}
                                            </td>
                                            <td className="col-md-1 text-center">{UtilCurrency.RielCurrency(i.price)}</td>
                                            <td className="col-md-1 text-center">{UtilCurrency.RielCurrency(i.totalAmount)}</td>
                                        </tr>
                                    ))
                                }


                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td className="text-right">
                                        <h4>
                                            <strong>Total:&nbsp;</strong>
                                        </h4>
                                    </td>
                                    <td className="text-center text-danger">
                                        <h4>
                                            <strong className="text-nowrap">{UtilCurrency.RielCurrency(data.totalAmount)}</strong>
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-success btn-lg btn-block">
                                Pay Now&nbsp;&nbsp;&nbsp;
                                <span className="glyphicon glyphicon-chevron-right"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Invoice;