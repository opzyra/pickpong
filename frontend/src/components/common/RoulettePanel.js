import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import { useRewardDispatch } from '../../contexts/reward/rewardContext';
import { setReward, fetchRewards } from '../../contexts/reward/rewardAction';
import { onAuth } from '../../utils/token';
import {
  useCommonDispatch,
  useCommonState,
} from '../../contexts/common/commonContext';
import {
  openModal,
  openAlert,
  setRoulette,
  setRoatting,
} from '../../contexts/common/commonAction';

import Roulette from '../../assets/images/roulette.png';
import RouletteStart from '../../assets/images/roulette-start.png';
import RoulettePin from '../../assets/images/roulette-pin.png';

const rouletteEffect = props => {
  const deg = 3600 - props.rotation;
  return keyframes`
  to {
    transform: rotate(${deg}deg);
  }`;
};

const RoulettePanelBlock = styled.div`
  text-align: center;
  margin: 60px 0px;
  position: relative;
  outline: none;
  overflow: hidden;

  img {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }

  img.start {
    animation-name: ${props => rouletteEffect(props)};
    animation-duration: 7s;
    animation-timing-function: ease;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }

  ${({ theme }) => theme.mobile`
    margin: 40px 0px;
  `};
`;

const RoulettePinBlock = styled.img`
  position: absolute;
  top: 36px;
  right: 46.7%;
  transform: translate(-50%, -50%);
  z-index: 100;
  ${({ theme }) => theme.mobile`
    width: 30px;
    top: 28px;
    right: calc(50% - 30px);
  `};
`;

const RouletteImageBlock = styled.img`
  ${({ theme }) => theme.mobile`
    width: 360px;
  `};
`;

const RouletteStartBlock = styled.img`
  position: absolute;
  top: 49.6%;
  right: 39.6%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  ${({ theme }) => theme.mobile`
    width: 94px;
    right: calc(50% - 96px);
  `};
`;

function RoulettePanel() {
  const { rotating } = useCommonState();
  const [rotation, setRotation] = useState(0);
  const roulette = useRef(null);

  const rewardDispatch = useRewardDispatch();
  const commonDispatch = useCommonDispatch();

  const start = async () => {
    if (!onAuth()) {
      openModal(commonDispatch, 'loginModal');
      return;
    }

    if (rotating) return;

    setRoatting(commonDispatch, true);

    const reward = await setReward(rewardDispatch);
    await fetchRewards(rewardDispatch);

    if (!reward) {
      openAlert(commonDispatch, 'noTicket');
      setRoatting(commonDispatch, false);
      return;
    }
    roulette.current.classList.remove('start');
    roulette.current.classList.add('start');
    setRotation(reward.deg);

    setTimeout(() => {
      setRoulette(commonDispatch, reward.type);
      openModal(commonDispatch, 'rouletteModal');
      setRoatting(commonDispatch, false);
    }, 7000);
  };

  return (
    <RoulettePanelBlock rotation={rotation}>
      <RoulettePinBlock src={RoulettePin} alt="pin" />
      <RouletteImageBlock src={Roulette} ref={roulette} alt="roulette" />
      <RouletteStartBlock src={RouletteStart} onClick={start} alt="start" />
    </RoulettePanelBlock>
  );
}
export default RoulettePanel;
