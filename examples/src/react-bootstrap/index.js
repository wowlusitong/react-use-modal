import React from 'react';
import { Modal } from 'react-bootstrap';
import { useModal } from 'use-modal';


const ReactBootstrapModal = () => {
  const { showModal, closeModal } = useModal();
  function handleClick() {
    showModal(({ show }) => (
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
      </Modal>
    ))
  }

  return (
    <button onClick={handleClick}>open react-bootstrap modal</button>
  )
}

export default ReactBootstrapModal;
