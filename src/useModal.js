import React from 'react';
import ModalProvider from './ModalProvider';
import ModalContext from './context';

export default function useModal(friendID) {
  return React.useContext(ModalContext);
}
