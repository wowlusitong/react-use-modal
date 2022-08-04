# react-use-modal &middot; [![npm](https://img.shields.io/npm/v/react-use-modal.svg?style=popout)](https://www.npmjs.com/package/react-use-modal) [![min](https://badgen.net/bundlephobia/min/react-use-modal)](https://bundlephobia.com/result?p=react-use-modal)

简体中文 | [English](https://github.com/wowlusitong/react-use-modal/blob/master/README-en.md)

主流 modal 大多需要在组件内使用 state 控制是否显示，在多个地方调用的时候很不方便，所以基于 [context](https://reactjs.org/docs/context.html#api) 提供一个更加易用的调用方式。

`use-modal` 支持主流的 modal, 理论上只要 modal 通过类似于 `show props` 控制显示的，就可以支持，例如:

-   [antd](https://github.com/ant-design/ant-design)
-   [react-bootstrap](https://react-bootstrap.github.io/components/modal/)
-   [react-overlays](https://github.com/react-bootstrap/react-overlays)
-   [react-modals](https://github.com/reactjs/react-modal)
-   [material-ui](https://material-ui.com/utils/modal/)

## 安装

使用 yarn

```
$ yarn add react-use-modal
```

或者用 npm

```
$ npm install react-use-modal --save
```

## 使用

将 `ModalProvider` 放在组件外层

```js
import ReactDOM from 'react-dom'
import { ModalProvider } from 'react-use-modal'

ReactDOM.render(<ModalProvider>...</ModalProvider>, document.querySelector('#root'))
```

调用方式，以 react-bootstrap 举例

使用 context

```js
import React from 'react'

import { Modal } from 'react-bootstrap'
import { ModalContext } from 'react-use-modal'

export default class App extends React.Component {
	handleClick = () => {
		const { showModal, closeModal } = this.context
		showModal(({ show }) => (
			<Modal show={show} onHide={closeModal}>
				<Modal.Body>body</Modal.Body>
			</Modal>
		))
	}

	render() {
		return <button onClick={this.handleClick}>click</button>
	}
}
App.contextType = ModalContext
```

context 并且支持 `showModal(ReactElement)` 用法

```js
import React from 'react'

import { Modal } from 'react-bootstrap'
import { ModalContext } from 'react-use-modal'

const CustomModal = props => {
	const { show, closeModal, data } = props

	return (
		<Modal show={show} onHide={closeModal}>
			<Modal.Body>{data.body}</Modal.Body>
		</Modal>
	)
}

export default class App extends React.Component {
	handleClick = () => {
		const { showModal } = this.context

		const data = {
			body: 'body',
		}

		showModal(<CustomModal data={data} />)
	}

	render() {
		return <button onClick={this.handleClick}>click</button>
	}
}
App.contextType = ModalContext
```

使用 hooks

```js
import React from 'react'
import { Modal } from 'react-bootstrap'
import { useModal } from 'react-use-modal'

const App = () => {
	const { showModal, closeModal } = useModal()

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

	return <button onClick={handleClick}>modal</button>
}
```

hooks 并且支持 `showModal(ReactElement)` 用法

```js
import React from 'react'
import { Modal } from 'react-bootstrap'
import { useModal } from 'react-use-modal'

const CustomModal = props => {
	const { show, closeModal, data } = props

	return (
		<Modal show={show} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>{data.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{data.body}</Modal.Body>
		</Modal>
	)
}

const App = () => {
	const { showModal } = useModal()

	const data = {
		title: 'Modal title',
		body: 'Modal body text goes here.',
	}

	function handleClick() {
		showModal(<CustomModal data={data} />)
	}

	return <button onClick={handleClick}>modal</button>
}
```

## API

#### showModal

显示 modal，将 `show` 设置为 true

##### 参数

component(?Function | ReactElement):
第一次调用必须传递参数，再次调用可忽略

```js
showModal(props => (
	<Modal show={show} onHide={closeModal}>
		<Modal.Body>body</Modal.Body>
	</Modal>
))
```

组件 props

| Name | Type    | Default | Description    |
| ---- | ------- | ------- | -------------- |
| show | boolean | false   | 是否显示 modal |

#### closeModal

关闭 modal，将 `show` 设置为 false
