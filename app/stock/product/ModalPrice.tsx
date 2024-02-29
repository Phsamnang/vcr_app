'use client'
import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {productService} from "@/service/product.service";

interface Props {
    productId: number,
    productName: string
}

function ModalPrice({productId, productName}: Props) {
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState<number>();
    const [currency, setCurrency] = useState<number>(0);
    const queryClient = useQueryClient()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    console.log(" price", currency)

    const {mutate: addStock} = useMutation(
        {
            mutationFn: () => productService.addPrice({productId: productId, amount: price, currency: currency}),
            onSuccess: () => {
                handleClose()
                queryClient.invalidateQueries(['products'])
            }
        }
    )
    return (
        <div className="mt-2">
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>
            <Modal show={show} onHide={handleShow} centered>
                <Modal.Header>
                    <Modal.Title>
                        {productName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">
                            Select Category
                        </label>
                        <select name="categoryId" className="form-select" aria-label="Default select example"
                                onChange={e => setCurrency(e.target.value)}>
                            <option selected>Select Currency</option>
                            // eslint-disable-next-line react/jsx-key
                            <option value="USD">USD</option>
                            <option value="RIEL">RIEL</option>

                        </select>
                    </div>
                    <label className="form-label">
                        Price
                    </label>
                    <input onChange={e => setPrice(e.target.value)}
                           className="form-control"
                           type="text"
                           id="example-text-input" value={price}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addStock}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalPrice;