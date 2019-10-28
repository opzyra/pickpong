import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import MissionResumeImage from '../../assets/images/mission-resume.png';

import { useMissionState } from '../../contexts/mission/missionContext';
import { useCommonDispatch } from '../../contexts/common/commonContext';
import { onAuth } from '../../utils/token';
import { openModal } from '../../contexts/common/commonAction';

const MissionResumeBlock = styled.div`
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

function MissionResume() {
  const missionState = useMissionState();
  const status = missionState.status[2];

  const commonDispatch = useCommonDispatch();

  const onClick = () => {
    if (!onAuth()) {
      openModal(commonDispatch, 'loginModal');
      return;
    }
  };

  return (
    <MissionResumeBlock>
      <img src={MissionResumeImage} alt="" />
      <div className="description">
        저는 새로운 보금자리를 찾고 있어요
        <br />
        이력서를 한 번 살펴봐 주세요
      </div>
      <Button color="#7048e8" disabled={status && `disabled`} onClick={onClick}>
        {status ? `참여 완료` : `미션 참여하기`}
      </Button>
    </MissionResumeBlock>
  );
}
export default MissionResume;
