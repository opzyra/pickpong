import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import MissionLoginImage from '../../assets/images/mission-login.png';

import { useMissionState } from '../../contexts/mission/missionContext';
import { useCommonDispatch } from '../../contexts/common/commonContext';
import { openModal } from '../../contexts/common/commonAction';

const MissionLoginBlock = styled.div`
  margin: 36px;
  width: 33.3333%;

  img {
    width: 80%;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

function MissionLogin() {
  const missionState = useMissionState();
  const status = missionState.status[0];

  const commonDispatch = useCommonDispatch();

  const onClick = () => {
    openModal(commonDispatch, 'loginModal');
  };

  return (
    <MissionLoginBlock>
      <img src={MissionLoginImage} alt="" />
      <div className="description">
        리엑트로 만든 토이 프로젝트의
        <br />
        로그인 기능이 작동하는지 확인해 주세요
      </div>
      <Button color="#007cff" disabled={status && `disabled`} onClick={onClick}>
        {status ? `참여 완료` : `미션 참여하기`}
      </Button>
    </MissionLoginBlock>
  );
}
export default MissionLogin;
