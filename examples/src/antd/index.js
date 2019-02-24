import React from 'react';
import { Modal, Button } from 'antd';
import { useModal } from 'react-use-modal';

const AntModal = () => {
  const { showModal, closeModal } = useModal();
  function handleClick() {
    showModal(({ show }) => (
      <Modal
        title="Basic Modal"
        visible={show}
        onOk={closeModal}
        onCancel={closeModal}
        >
        <p>Some contents...</p>
      </Modal>
    ))
  }

  return (
    <Button onClick={handleClick}>open antd modal</Button>
  )
}

export default AntModal;
