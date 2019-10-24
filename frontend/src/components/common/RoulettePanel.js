import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import Roulette from '../../assets/images/roulette.png';
import RouletteStart from '../../assets/images/roulette-start.png';
import RoulettePin from '../../assets/images/roulette-pin.png';

const rouletteEffect = props => {
  const deg = props.rotation + 3600;
  return keyframes`
  to {
    transform: rotate(${deg}deg);
  }`;
};

const RoulettePanelBlock = styled.div`
  text-align: center;
  margin: 60px 0px;
  position: relative;

  img.start {
    animation-name: ${props => rouletteEffect(props)};
    animation-duration: 7s;
    animation-timing-function: ease;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
`;

const RoulettePinBlock = styled.img`
  position: absolute;
  top: 36px;
  right: 46.7%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const RouletteImageBlock = styled.img``;

const RouletteStartBlock = styled.img`
  position: absolute;
  top: 49.6%;
  right: 39.6%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

function RoulettePanel() {
  const [status, setStatus] = useState(false);
  const [rotation, setRotation] = useState(0);
  const roulette = useRef(null);

  const start = () => {
    if (status) return;

    roulette.current.classList.add('start');
    setRotation(90);

    setStatus(true);
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
