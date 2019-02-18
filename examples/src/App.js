import React from 'react';
import { ModalProvider } from 'use-modal';

import AntModal from './antd';
import ReactBootstrapModal from './react-bootstrap';

const App = () => (
  <ModalProvider>
    <p>
      <AntModal />
    </p>
    <p>
      <ReactBootstrapModal />
    </p>  
  </ModalProvider>
)

export default App;
