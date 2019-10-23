import React from 'react';
import styled from 'styled-components';

import MissionLogin from '../../assets/images/mission-login.png';
import MissionFollow from '../../assets/images/mission-follow.png';
import MissionResume from '../../assets/images/mission-resume.png';

import Wrap from '../common/Wrap';
import MissionCard from '../common/MissionCard';

const InformationBlock = styled.div`
  background: #eceaf8;
  height: 100%;
  text-align: center;
  padding: 48px 0px;
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
  const missions = [
    {
      img: MissionLogin,
      description: `리엑트로 만든 토이 프로젝트의<br/>로그인 기능이 작동하는지 확인해 주세요`,
      color: '#007cff',
    },
    {
      img: MissionFollow,
      description: `만나서 반가워요 !<br/>개발자의 깃허브를 팔로우해 주세요`,
      color: '#d949aa',
    },
    {
      img: MissionResume,
      description: `저는 새로운 보금자리를 찾고 있어요 <br/>이력서를 한 번 살펴봐 주세요`,
      color: '#7048e8',
    },
  ];

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
          {missions.map((mission, index) => (
            <MissionCard
              img={mission.img}
              description={mission.description}
              color={mission.color}
              key={index}
            />
          ))}
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
