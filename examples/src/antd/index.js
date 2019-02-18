import React from 'react';
import { Modal } from 'antd';
import { useModal } from 'use-modal';

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
    <button onClick={handleClick}>open antd modal</button>
  )
}

export default AntModal;
