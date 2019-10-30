import React, { useState } from 'react';
import styled from 'styled-components';

import { MdDone, MdClose } from 'react-icons/md';

import * as apiClient from '../../utils/apiClient';

import Modal from '../common/Modal';

import {
  useRewardState,
  useRewardDispatch,
} from '../../contexts/reward/rewardContext';

import RewardItem from '../common/RewardItem';
import Input from '../common/Input';

import RewardEmptyImage from '../../assets/images/reward-empty.png';
import { fetchRewards } from '../../contexts/reward/rewardAction';
import { fetchComments } from '../../contexts/comment/commentAction';
import {
  useCommentDispatch,
  useCommentState,
} from '../../contexts/comment/commentContext';

const RewardModalContents = styled.div`
  padding: 32px;
  text-align: center;

  .help {
    margin: 8px 0 24px 0;
  }

  .empty-img {
    margin: 24px 0px;
    width: 200px;
  }

  .empty {
    font-size: 20;
    line-height: 28px;
  }
`;

const RewardInputArea = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 20px;
  width: 100%;
  left: 0px;
  box-sizing: border-box;
  background: #ded7e1;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  .button {
    display: inline-flex;
    position: absolute;
    top: -16px;
    right: 12px;
    font-size: 20px;
    background: #fff;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    border: 1px solid #ded7e1;
    cursor: pointer;

    &.submit {
      color: #2b8a3e;
      right: 48px;
    }

    &.close {
      color: #c92a2a;
    }

    svg {
      padding: 4px;
    }
  }
`;

function RewardModal() {
  const [input, setInput] = useState(false);
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceHolder] = useState(null);
  const [reward, setReward] = useState(null);

  const commentState = useCommentState();
  const rewardState = useRewardState();
  const { rewards } = rewardState;
  const { page } = commentState;

  const rewardDispatch = useRewardDispatch();
  const commentDispatch = useCommentDispatch();

  const onCloseCallback = () => {
    setInput(false);
  };

  const onComment = reward => () => {
    setInput(true);
    setReward(reward);
    setPlaceHolder('코멘트를 작성해주세요 !');
  };

  const onEmail = reward => () => {
    setInput(true);
    setReward(reward);
    setPlaceHolder('상품을 받으실 이메일을 정확히 입력해주세요.');
  };

  const onInputClose = () => {
    setInput(false);
  };

  const onInputChage = event => {
    setValue(event.target.value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    await apiClient.post('/reward/receive', { idx: reward.idx, value });
    fetchRewards(rewardDispatch);
    fetchComments(commentDispatch, page);
    setInput(false);
  };

  return (
    <Modal
      type="rewardModal"
      width="460"
      height="450"
      callback={onCloseCallback}
    >
      <RewardModalContents>
        <h4>당첨 내역</h4>
        {rewards.length === 0 && (
          <>
            <img className="empty-img" src={RewardEmptyImage} alt="" />
            <div className="empty">
              당첨내역이 없습니다.
              <br />
              미션을 클리어하고 응모권을 획득하여 도전해보세요 !
            </div>
          </>
        )}
        {rewards.length !== 0 && (
          <>
            <div className="help">이벤트에 참여해주셔서 정말 감사합니다.</div>
            {rewards.map(reward => (
              <RewardItem
                reward={reward}
                key={reward.idx}
                onUse={reward.type === 4 ? onComment(reward) : onEmail(reward)}
              />
            ))}
          </>
        )}
        {input && (
          <RewardInputArea>
            <form onSubmit={onSubmit}>
              <Input
                placeholder={placeholder}
                required
                maxlength="100"
                onChange={onInputChage}
              ></Input>
            </form>
            <div className="button submit" onClick={onSubmit}>
              <MdDone />
            </div>
            <div className="button close" onClick={onInputClose}>
              <MdClose />
            </div>
          </RewardInputArea>
        )}
      </RewardModalContents>
    </Modal>
  );
}

export default RewardModal;
