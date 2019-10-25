import React from 'react';
import styled from 'styled-components';

import Wrap from '../common/Wrap';

import MissionLogin from '../common/MissionLogin';
import MissionFollow from '../common/MissionFollow';
import MissionResume from '../common/MissionResume';

const InformationBlock = styled.div`
  background: #eceaf8;
  height: 100%;
  text-align: center;
  padding: 60px 0px;
`;

const SubTitleBlock = styled.div`
  h5 {
    font-weight: normal;
  }
`;

const MissionBlock = styled.div`
  display: flex;
  margin: 12px 0px 48px 0;
`;

const TicketBlock = styled.div`
  background: #e2deef;

  ul {
    text-align: left;
    padding: 36px;
  }

  li + li {
    margin-top: 12px;
  }
`;

function Information() {
  return (
    <InformationBlock>
      <Wrap>
        <SubTitleBlock>
          <h5>
            깃허브 로그인으로 경품 룰렛 응모권 즉시지급에
            <br />
            다양한 미션으로 추가혜택까지 !
          </h5>
        </SubTitleBlock>
        <MissionBlock>
          <MissionLogin />
          <MissionFollow />
          <MissionResume />
        </MissionBlock>
        <TicketBlock>
          <ul>
            <li>미션별로 1회 참여가 가능합니다.</li>
            <li>
              팔로우 맺기의 경우 새로고침을 통해 응모권을 받으실 수 있습니다.
            </li>
            <li>
              부당한 방법으로 응모권을 획득하여 사용하신 경우 보상이 지급되지
              않습니다.
            </li>
          </ul>
        </TicketBlock>
      </Wrap>
    </InformationBlock>
  );
}

export default Information;
