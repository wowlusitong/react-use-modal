import React from 'react';

import ModalContext from './context';

export default class ModalProvider extends React.Component {
  state = {
    show: true,
    Modal: null,
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  handleShow = (Modal) => {
    this.setState({
      Modal,
      show: true,
    })
  }

  render() {
    const { show, Modal } = this.state

    const value = {
      show,
      showModal: this.handleShow,
      closeModal: this.handleClose,
    }

    let renderModal = Modal
    if (Modal) {
      if (React.isValidElement(Modal)) {
        renderModal = React.cloneElement(Modal, value)
      } else {
        renderModal = React.createElement(Modal, value)
      }
    }
    
    return (
      <ModalContext.Provider value={value}>
        {this.props.children}
        {renderModal}
      </ModalContext.Provider>
    )
  }
}
