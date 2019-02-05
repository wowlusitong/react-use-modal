import React from 'react';

import ModalContext from './context';

export default class ModalProvider extends React.Component {
  state = {
    show: true,
    Modal: null
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = (Modal) => {
    this.setState({
      show: true,
    })
    if (Modal) {
      this.setState({
        Modal
      })
    }
  }

  render() {
    const { show, Modal } = this.state;
    return (
      <ModalContext.Provider value={{
        show,
        showModal: this.handleShow,
        closeModal: this.handleClose
      }}>
        {this.props.children}
        {Modal && <Modal show={show} />}
      </ModalContext.Provider>
    )
  }
}
