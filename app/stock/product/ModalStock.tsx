'use client'
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {categoryService} from "@/service/category.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {productService} from "@/service/product.service";

function ModalStock({productId}:number) {
    const [show, setShow] = useState(false);
    const [qty, setQty] = useState<number>(0);
  const queryClient=useQueryClient()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const {mutate: addStock} = useMutation(
        {
            mutationFn: () => productService.addStock({productId:productId,qty:qty}),
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
                <Modal.Header >
                    <Modal.Title>
                        Add Quantity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={e => setQty(e.target.value)}
                           className="form-control"
                           type="text"
                           id="example-text-input" value={qty}
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

export default ModalStock;