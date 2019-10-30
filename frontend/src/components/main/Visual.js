import React from 'react';
import styled from 'styled-components';

import VisualPattern from '../../assets/images/visual-pattern.png';
import Octodex from '../../assets/images/octodex.png';
import Wrap from '../common/Wrap';

const VisualBlock = styled.div`
  background: #d5d6f4 url(${VisualPattern}) center center no-repeat;
  background-size: cover;
  position: relative;
  height: 560px;

  ${({ theme }) => theme.mobile`
    height: 400px;
  `};
`;

const DescriptionBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    width: 300px;
    margin-bottom: 16px;
  }

  h4 {
    color: #666666;
    font-weight: normal;
  }

  h1 {
    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
      7px 6px 1px #cccccc;

    .pre {
      color: #6f5afd;
    }

    .suf {
      color: #a831cb;
    }
  }

  ${({ theme }) => theme.mobile`
    min-width: 300px;
    img {
      width: 200px;
      margin-bottom: 16px;
    }
  `};
`;

function Visual() {
  return (
    <VisualBlock>
      <Wrap>
        <DescriptionBlock>
          <img src={Octodex} alt="octodex" />
          <h4>깃허브 로그인 해주시면</h4>
          <h1>
            <span className="pre">룰렛응모권</span>{' '}
            <span className="suf">즉시지급!</span>
          </h1>
        </DescriptionBlock>
      </Wrap>
    </VisualBlock>
  );
}

export default Visual;
