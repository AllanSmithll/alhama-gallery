import './ImageBox.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImageBox(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       
        <div className="Image-container">
            <img src={`/static/images/${props.linkImage}`} />
            <a href={`/static/images/${props.linknome}`}></a>
            <Button variant="primary" onClick={handleShow}>Ampliar</Button>
            
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={`/static/images/${props.linkImage}`} style={{width:'100%',height:'500px'}} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Fechar
            </Button>
            </Modal.Footer>
        </Modal>
            {/* <div className="modal fade img" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <img src={`/static/images/${props.linkImage}`}  />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ImageBox