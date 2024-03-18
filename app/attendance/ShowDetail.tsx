import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";

const ShowDetail = ({isShow,setIsShow}) => {
    console.log("pop up commponent",isShow)
 const handleClose=()=>{
     setIsShow(false)
 }
    return (
        <div>
            <Modal show={isShow} centered>
                <Modal.Body>
                    Heloooerdjgvfsdljkf
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ShowDetail;