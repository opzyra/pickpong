import React from 'react';
import styled from 'styled-components';

import Modal from '../common/Modal';
import Button from '../common/Button';
import {
  useCommonState,
  useCommonDispatch,
} from '../../contexts/common/commonContext';
import { closeModal } from '../../contexts/common/commonAction';

import StarbucksImage from '../../assets/images/starbucks.png';
import PaiksImage from '../../assets/images/paiks.png';
import EdiyaImage from '../../assets/images/ediya.png';
import MegaphoneImage from '../../assets/images/megaphone.png';

const RouletteModalContents = styled.div`
  padding: 32px;
  text-align: center;

  img {
    margin: 24px 0px;
    width: 200px;
  }

  svg {
    margin-top: 2px;
    margin-right: 8px;
  }

  .description {
    margin-bottom: 20px;
    line-height: 24px;
  }
`;

function RouletteModal() {
  const commonState = useCommonState();
  const commonDispatch = useCommonDispatch();

  const type = commonState.roulette;

  const reward = [
    {
      item: '',
      img: '',
    },
    {
      item: '스타벅스 아메리카노',
      img: StarbucksImage,
    },
    {
      item: '백다방 완전초코바나나',
      img: PaiksImage,
    },
    {
      item: '이디아 버블흑당라떼',
      img: EdiyaImage,
    },
    {
      item: '소통댓글 확성기',
      img: MegaphoneImage,
    },
  ];

  const onClose = () => {
    closeModal(commonDispatch, 'rouletteModal');
  };

  return (
    <Modal type="rouletteModal" width="460" height="460">
      <RouletteModalContents>
        <h4>축하합니다 !</h4>
        <img src={reward[type].img} alt="" />
        <div className="description">
          {reward[type].item}에 당첨되셨습니다.
          <br />
          상품 교환은 당첨내역에서 가능합니다.
        </div>
        <Button color="#007cff" onClick={onClose}>
          확인
        </Button>
      </RouletteModalContents>
    </Modal>
  );
}

export default RouletteModal;
