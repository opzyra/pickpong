import React, { useCallback } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-awesome-modal';
import { MdClose } from 'react-icons/md';
import Button from './Button';

import {
  useCommonState,
  useCommonDispatch,
} from '../../contexts/common/commonContext';
import { closeAlert } from '../../contexts/common/commonAction';

import MissionFollowImage from '../../assets/images/mission-follow.png';
import TicketImage from '../../assets/images/ticket.png';
import ErrorImage from '../../assets/images/error.png';

const AlertBlock = styled.div`
  position: relative;
  & > div > div {
    padding: 12px;
    box-sizing: border-box;
  }
`;

const AlertContentsBlock = styled.div`
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

const AlertCloseButton = styled.div`
  top: 12px;
  right: 12px;
  position: absolute;
  cursor: pointer;
  font-size: 20px;
`;

function Alert() {
  const commonState = useCommonState();
  const commonDispatch = useCommonDispatch();

  let { type, visible, title, description, img } = commonState.alert;

  switch (type) {
    case 'follow':
      title = '미션 안내';
      description =
        '깃허브에서 팔로우를 맺으신 뒤에 미션 참여하기<br/>버튼을 다시 한번 눌러주세요';
      img = MissionFollowImage;
      break;
    case 'reward':
      title = '응모권 획득';
      description =
        '미션 클리어로 응모권을 획득하셨습니다.<br/>참여해주셔서 감사합니다.';
      img = TicketImage;
      break;
    case 'noTicket':
      title = '응모권이 없어요';
      description =
        '응모권이 없어 룰렛에 도전하실 수 없습니다.<br/>미션으로 응모권을 획득해 보세요 !';
      img = ErrorImage;
      break;
    case 'error':
      title = '시스템 에러';
      description =
        '시스템 에러가 발생하였습니다.<br/>관리자에게 문의해주세요.';
      img = ErrorImage;
      break;
    default:
  }

  const onCloseAlert = useCallback(() => {
    closeAlert(commonDispatch);
  }, [commonDispatch]);

  return (
    <AlertBlock>
      <ReactModal width="400" height="460" visible={visible} effect="fadeInUp">
        <AlertContentsBlock>
          <h4>{title}</h4>
          <img src={img} alt="" />
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <Button color="#007cff" onClick={onCloseAlert}>
            확인
          </Button>
          <AlertCloseButton onClick={onCloseAlert} className="close">
            <MdClose />
          </AlertCloseButton>
        </AlertContentsBlock>
      </ReactModal>
    </AlertBlock>
  );
}

export default Alert;
