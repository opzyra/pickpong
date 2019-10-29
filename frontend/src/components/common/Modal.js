import React, { useCallback, useRef } from 'react';
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
  let modal = useRef(false);
  modal.current = commonState[type];

  const commonDispatch = useCommonDispatch();

  const onCloseModal = useCallback(() => {
    callback();
    closeModal(commonDispatch, type);
  }, [callback, commonDispatch, type]);

  return (
    <ModalBlock>
      <ReactModal
        width={width}
        height={height}
        visible={modal.current}
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
