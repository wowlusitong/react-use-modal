# react-use-modal

主流modal大多需要在组件内使用state控制是否显示，在多个地方调用的时候很不方便，所以基于 [context](https://reactjs.org/docs/context.html#api) 提供一个更加易用的调用方式。

`use-modal` 支持主流的modal, 理论上只要modal通过类似于 `show props` 控制显示的，就可以支持，例如:
- [antd](https://github.com/ant-design/ant-design)
- [react-bootstrap](https://react-bootstrap.github.io/components/modal/)
- [react-overlays](https://github.com/react-bootstrap/react-overlays)
- [react-modals](https://github.com/reactjs/react-modal)
- [material-ui](https://material-ui.com/utils/modal/)

## 安装

使用yarn
```
$ yarn add react-use-modal
```
或者用npm
```
$ npm install react-use-modal --save
```

## 使用

将 `ModalProvider` 放在组件外层
```js
import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-use-modal';

ReactDOM.render(
  <ModalProvider>
    ...
  </ModalProvider>,
  document.querySelector('#root')
)
```
调用方式，以react-bootstrap举例

使用context
```js
import React from 'react';

import { Modal } from 'react-bootstrap';
import { ModalContext } from 'react-use-modal';

export default class App extends React.Component {

  handleClick = () => {
    const {showModal, closeModal} = this.context;
    showModal(({ show }) => (
      <Modal show={show} onHide={closeModal}>
        <Modal.Body>body</Modal.Body>
      </Modal>
    ))
  }

  render() {
    return (
      <button onClick={this.handleClick}>click</button>
    )
  }
}
Product.contextType = ModalContext
```
使用hooks
```js
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useModal } from 'react-use-modal';

const App = () => {
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
    <button onClick={handleClick}>modal</button>
  )
}
```

## API

#### showModal
显示modal，将 `show` 设置为true

##### 参数
component(?Function):
第一次调用必须传递参数，再次调用可忽略
```js
showModal(props => (
  <Modal show={show} onHide={closeModal}>
    <Modal.Body>body</Modal.Body>
  </Modal>
))
```

组件props

Name|Type|Default|Description
-|-|-|-
show|boolean|false|是否显示modal

#### closeModal
关闭modal，将 `show` 设置为false
