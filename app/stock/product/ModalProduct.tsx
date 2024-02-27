'use client'
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {categoryService} from "@/service/category.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import useFetchAllCategories from "@/libs/hooks/fetch-all-categories";
import {productService} from "@/service/product.service";

function ModalProduct() {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState("");
    const queryClient = useQueryClient()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const {data, isLoading} = useFetchAllCategories()
    const [formData, setFormData] = useState({
        name: '',
        categoryId: '',
        price:0,
        image:'',
        isAvailable:''

    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const {mutate: createProduct} = useMutation(
        {
            mutationFn: () => productService.createProduct(formData),
            onSuccess: () => {
                //alert("Create product successfully!")
                handleClose()
            }
        }
    )
    return (
        <div className="mt-2">
            <Button variant="primary" onClick={handleShow}>
                Create New Product
            </Button>
            <Modal show={show} onHide={handleShow} centered>
                <Modal.Header>
                    <Modal.Title>
                        Create Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">
                                Select Category
                            </label>
                            <select name="categoryId" className="form-select" aria-label="Default select example" onChange={handleChange}>
                                <option selected>Open this select menu</option>
                                {data?.map((c) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <option value={c.categoryId}>{c.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">
                                Product's Name
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                               name="name"
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createProduct}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalProduct;