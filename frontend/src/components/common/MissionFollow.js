import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import MissionFollowImage from '../../assets/images/mission-follow.png';

import { useAuthState } from '../../contexts/auth/authContext';
import { useMissionState } from '../../contexts/mission/missionContext';

const MissionFollowBlock = styled.div`
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

function MissionFollow() {
  const authState = useAuthState();
  const missionState = useMissionState();

  const status = missionState.status[1];

  const onClick = () => {
    window.location.href = authState.authUrl;
  };

  return (
    <MissionFollowBlock>
      <img src={MissionFollowImage} alt="" />
      <div className="description">
        만나서 반가워요 !
        <br />
        개발자의 깃허브를 팔로우해 주세요
      </div>
      <Button color="#d949aa" disabled={status && `disabled`} onClick={onClick}>
        {status ? `참여 완료` : `미션 참여하기`}
      </Button>
    </MissionFollowBlock>
  );
}
export default MissionFollow;
