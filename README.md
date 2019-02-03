# react-use-modal

使用 `react-use-modal` 能以更方便的方式调用 modal 组件，比如 [react-bootstrap](https://react-bootstrap.github.io/components/modal/)， [antd](https://github.com/ant-design/ant-design)

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

const App = () => (
  <ModalProvider>
    ...
  </ModalProvider>
)
ReactDOM.render(
  <ModalProvider>
    ...
  </ModalProvider>,
  document.querySelector('#root')
)
```
组件内调用方式，以react-bootstrap举例
```js
import * as React from 'react';

import { ModalContext } from 'react-use-modal';
import {Modal} from 'react-bootstrap';

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

## API

#### showModal
显示modal，将 `show` 设置为true
`showModal`需传递一个组件, 组件props包含show属性

#### closeModal
关闭modal，将 `show` 设置为false
