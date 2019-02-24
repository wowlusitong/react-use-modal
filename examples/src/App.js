import React from 'react';
import { ModalProvider } from 'react-use-modal';

import AntModal from './antd';
import ReactBootstrapModal from './react-bootstrap';

const App = () => (
  <ModalProvider>
    <div className="container">
      <h1>react-use-modal</h1>
      <br />
      <p>
        <p>ant-design</p>
        <AntModal />
      </p>
      <p>
        <p>react-bootstrap</p>
        <ReactBootstrapModal />
      </p>
    </div>
  </ModalProvider>
)

export default App;
