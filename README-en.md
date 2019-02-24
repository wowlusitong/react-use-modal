# react-use-modal

Most of the mainstream modal needs to use the state control in the component to display whether it is inconvenient to call in multiple places, so it is easier to provide based on [context](https://reactjs.org/docs/context.html#api) The method of calling.

`use-modal` supports the mainstream modal. In theory, as long as the modal is controlled by something like `show props`, it can be supported, for example:
- [antd](https://github.com/ant-design/ant-design)
- [react-bootstrap](https://react-bootstrap.github.io/components/modal/)
- [react-overlays](https://github.com/react-bootstrap/react-overlays)
- [react-modals](https://github.com/reactjs/react-modal)
- [material-ui](https://material-ui.com/utils/modal/)

## Installation

Use yarn
```
$ yarn add react-use-modal
```
Or use npm
```
$ npm install react-use-modal --save
```

## Use

Put `ModalProvider` in the outer layer of the component
```js
Import ReactDOM from 'react-dom';
Import { ModalProvider } from 'react-use-modal';

ReactDOM.render(
  <ModalProvider>
    ...
  </ModalProvider>,
  document.querySelector('#root')
)
```
Call mode, with react-bootstrap example

Use context
```js
Import React from 'react';

Import { Modal } from 'react-bootstrap';
Import { ModalContext } from 'react-use-modal';

Export default class App extends React.Component {

  handleClick = () => {
    Const {showModal, closeModal} = this.context;
    showModal(({ show }) => (
      <Modal show={show} onHide={closeModal}>
        <Modal.Body>body</Modal.Body>
      </Modal>
    ))
  }

  Render() {
    Return (
      <button onClick={this.handleClick}>click</button>
    )
  }
}
Product.contextType = ModalContext
```
Use hooks
```js
Import React from 'react';
Import { Modal } from 'react-bootstrap';
Import { useModal } from 'react-use-modal';

Const App = () => {
  Const { showModal, closeModal } = useModal();

  Function handleClick() {
    showModal(({ show }) => (
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
      </Modal>
    ))
  }

  Return (
    <button onClick={handleClick}>modal</button>
  )
}
```

## API

#### showModal
Show modal, set `show` to true

##### Parameters
Component(?Function):
The first call must pass a parameter, and the call again can be ignored.
```js
showModal(props => (
  <Modal show={show} onHide={closeModal}>
    <Modal.Body>body</Modal.Body>
  </Modal>
))
```

Component props

Name|Type|Default|Description
-|-|-|-
Show|boolean|false| Whether to display modal

#### closeModal
Turn off modal and set `show` to false
