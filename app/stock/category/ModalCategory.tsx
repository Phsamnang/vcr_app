'use client'
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {categoryService} from "@/service/category.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";

function ModalCategory() {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState("");
    const queryClient = useQueryClient()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const {mutate: createCategory} = useMutation(
        {
            mutationFn: () => categoryService.createCategory({name: category}),
            onSuccess: () => {
                setCategory(" ")
                handleClose()
                queryClient.invalidateQueries(['categories'])
            }
        }
    )
    return (
        <div className="mt-2">
            <Button variant="primary" onClick={handleShow}>
                Create Category
            </Button>
            <Modal show={show} onHide={handleShow} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Create category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={e => setCategory(e.target.value)}
                           className="form-control"
                           type="text"
                           id="example-text-input" value={category}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createCategory}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalCategory;