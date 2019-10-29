import React from 'react';
import styled from 'styled-components';

import StarbucksImage from '../../assets/images/starbucks.png';
import PaiksImage from '../../assets/images/paiks.png';
import EdiyaImage from '../../assets/images/ediya.png';
import MegaphoneImage from '../../assets/images/megaphone.png';

const RewardItemBlock = styled.div`
  display: flex;
  margin: 12px 0px;
  img {
    width: 72px;
    margin-right: 12px;
  }
  .description {
    width: 100%;
    margin-top: 8px;
    text-align: left;

    .name {
      margin-bottom: 8px;
    }

    .button {
      display: inline-block;
      border-radius: 12px;
      background: #007cff;
      color: #fff;
      padding: 4px 8px;
      font-size: 12px;
      cursor: pointer;

      &.used {
        cursor: default;
        background: #d949aa;
      }
    }
  }
`;

function RewardItem({ reward, onUse }) {
  const items = [
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

  const { item, img } = items[reward.type];

  return (
    <RewardItemBlock>
      <div>
        <img src={img} alt=""></img>
      </div>
      <div className="description">
        <div className="name">{item}</div>
        {reward.used ? (
          <div className="button used">완료</div>
        ) : (
          <div className="button" onClick={onUse}>
            상품 받기
          </div>
        )}
      </div>
    </RewardItemBlock>
  );
}

export default RewardItem;
