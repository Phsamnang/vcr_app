'use client'
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const OrderDetials = ({order}:any) => {
    return (
        <div>
             <table className="table table-borderless mb-0">
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
                    order.map((item:any)=> (
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
                        <span className="text-heading">$6398</span>
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
            </div>

        </div>
    );
};

export default OrderDetials;