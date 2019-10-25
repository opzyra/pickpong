import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import MissionResumeImage from '../../assets/images/mission-resume.png';

import { useAuthState } from '../../contexts/auth/authContext';
import { useMissionState } from '../../contexts/mission/missionContext';

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
  const authState = useAuthState();
  const missionState = useMissionState();
  const status = missionState.status[2];

  const onClick = () => {
    window.location.href = authState.authUrl;
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
