'use client'
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {categoryService} from "@/service/category.service";

function ModalCategory() {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function createCategory() {
        const cate = {
            name: category
        }
        categoryService.createCategory(cate).then(v => {
            if (v === 200) {
                setCategory("");
                handleClose()
            }
        }).catch(e => e);

    }
    return (
        <div className="mt-2">
            <Button variant="primary" onClick={handleShow}>
                Create
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