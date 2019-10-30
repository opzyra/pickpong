import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-awesome-modal';
import { MdClose } from 'react-icons/md';

import {
  useCommonState,
  useCommonDispatch,
} from '../../contexts/common/commonContext';
import { closeModal } from '../../contexts/common/commonAction';

const ModalBlock = styled.div`
  position: relative;
  & > div > div {
    padding: 12px;
    box-sizing: border-box;
  }
`;

const ModalCloseButton = styled.div`
  top: 12px;
  right: 12px;
  position: absolute;
  cursor: pointer;
  font-size: 20px;
`;

function Modal({ type, width, height, effect, callback, children }) {
  const commonState = useCommonState();
  const commonDispatch = useCommonDispatch();

  const onCloseModal = () => {
    callback && callback();
    closeModal(commonDispatch, type);
  };

  return (
    <ModalBlock>
      <ReactModal
        width={width}
        height={height}
        visible={commonState[type]}
        effect={effect}
      >
        {children}
        <ModalCloseButton onClick={onCloseModal} className="close">
          <MdClose />
        </ModalCloseButton>
      </ReactModal>
    </ModalBlock>
  );
}

Modal.defaultProps = {
  width: '400',
  height: '300',
  effect: 'fadeInUp',
};

export default Modal;
