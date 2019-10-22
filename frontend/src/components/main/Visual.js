import React from 'react';
import styled from 'styled-components';

import VisualPattern from '../../assets/images/visual-pattern.png';
import Octodex from '../../assets/images/octodex.png';
import Wrap from '../common/Wrap';

const VisualBlock = styled.section`
  background: #d5d6f4 url(${VisualPattern}) center center no-repeat;
  background-size: cover;
  position: relative;
  height: 560px;
`;

const DescriptionBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    width: 380px;
  }

  h3 {
    color: #666666;
  }

  h1 {
    text-shadow: 5px 5px 10% #666666;
    .pre {
      color: #6f5afd;
    }

    .suf {
      color: #a831cb;
    }
  }
`;

function Visual() {
  return (
    <VisualBlock>
      <Wrap>
        <DescriptionBlock>
          <img src={Octodex} alt="octodex" />
          <h3>깃허브 한 번 봐주시면</h3>
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
