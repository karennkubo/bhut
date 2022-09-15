import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

function CarDetails(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Informações
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Modelo:</strong> {props.title}</p>
                    <p><strong>Marca:</strong> {props.brand}</p>
                    <p><strong>Ano: </strong>{props.age}</p>
                </Modal.Body>
                <Modal.Footer>
                <h4>R$ {props.price}</h4>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CarDetails;