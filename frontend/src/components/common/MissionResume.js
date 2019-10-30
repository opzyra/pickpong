import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import * as apiClient from '../../utils/apiClient';

import {
  useMissionState,
  useMissionDispatch,
} from '../../contexts/mission/missionContext';
import { useCommonDispatch } from '../../contexts/common/commonContext';
import { onAuth } from '../../utils/token';
import { openModal, openAlert } from '../../contexts/common/commonAction';

import MissionResumeImage from '../../assets/images/mission-resume.png';
import { fetchMissions } from '../../contexts/mission/missionAction';

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

  ${({ theme }) => theme.mobile`
    width: 100%;
    margin: 0px;
    margin-top: 36px;

    img {
      width: 60%;
    }
  `};
`;

function MissionResume() {
  const missionState = useMissionState();
  const status = missionState.status[2];

  const commonDispatch = useCommonDispatch();
  const missionDispatch = useMissionDispatch();

  const onClick = async () => {
    if (!onAuth()) {
      openModal(commonDispatch, 'loginModal');
      return;
    }

    const { status } = await apiClient.post('/mission/resume');
    switch (status) {
      case 'ok':
        openAlert(commonDispatch, 'reward');
        window.open('https://devhyun.com', '_blank');
        break;
      default:
        openAlert(commonDispatch, 'error');
    }

    fetchMissions(missionDispatch);
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
