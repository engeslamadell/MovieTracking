import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ showModal, handleClose, modalTitle, modalBody, modalProceedButton, modalRejectButton, buttonColor, handleEdit, handleDelete }) => {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { modalBody }
            </Modal.Body>
            <Modal.Footer>
                <Button variant={buttonColor} onClick={(e) => {e.target.innerText === 'Edit' ? handleEdit() : handleDelete()}}>
                    {modalProceedButton}
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    {modalRejectButton}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;