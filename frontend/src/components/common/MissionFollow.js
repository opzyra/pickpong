import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import * as apiClient from '../../utils/apiClient';
import {
  useMissionState,
  useMissionDispatch,
} from '../../contexts/mission/missionContext';
import { onAuth } from '../../utils/token';
import { openModal, openAlert } from '../../contexts/common/commonAction';
import { useCommonDispatch } from '../../contexts/common/commonContext';
import { fetchMissions } from '../../contexts/mission/missionAction';

import MissionFollowImage from '../../assets/images/mission-follow.png';

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
  const missionState = useMissionState();
  const status = missionState.status[1];

  const commonDispatch = useCommonDispatch();
  const missionDispatch = useMissionDispatch();

  const onClick = async () => {
    if (!onAuth()) {
      openModal(commonDispatch, 'loginModal');
      return;
    }

    const { status } = await apiClient.post('/mission/follow');
    switch (status) {
      case 'notfound':
        openAlert(commonDispatch, 'follow');
        window.open('https://github.com/opzyra', '_blank');
        break;
      case 'ok':
        openAlert(commonDispatch, 'reward');
        break;
      default:
        openAlert(commonDispatch, 'error');
        break;
    }

    fetchMissions(missionDispatch);
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
