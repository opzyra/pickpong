import React from 'react';
import styled from 'styled-components';

import Wrap from '../common/Wrap';
import RoulettePanel from '../common/RoulettePanel';
import { useAuthState } from '../../contexts/auth/authContext';
import { useRewardState } from '../../contexts/reward/rewardContext';
import { useMissionState } from '../../contexts/mission/missionContext';
import Button from '../common/Button';
import { openModal } from '../../contexts/common/commonAction';
import {
  useCommonDispatch,
  useCommonState,
} from '../../contexts/common/commonContext';

const RouletteBlack = styled.div`
  background: #ded7e1;
  padding: 60px 0px;
`;

const RouletteAreaBlock = styled.div`
  text-align: center;
  h3 {
    color: #666666;
    margin-bottom: 12px;
  }
  span {
    line-height: 24px;
  }
`;

const TicketBlock = styled.div`
  margin: 32px auto 0px;
  width: 200px;
  background: #7048e8;
  padding: 12px 28px;
  border-radius: 60px;
  color: #ffffff;

  .count {
    font-size: 28px;
    margin-right: 4px;
    font-weight: bold;
  }
`;

function Roulette() {
  const { user } = useAuthState();
  const { rewards } = useRewardState();
  const { missions } = useMissionState();
  const { rotating } = useCommonState();

  const commonDispatch = useCommonDispatch();

  const onPercentage = () => {
    window.open(
      'https://github.com/opzyra/pickpong/blob/master/backend/src/lib/reward.js#L23',
      '_blank',
    );
  };

  const onReward = () => {
    if (rotating) return;
    openModal(commonDispatch, 'rewardModal');
  };

  return (
    <RouletteBlack>
      <Wrap>
        <RouletteAreaBlock>
          <h3>행운의 경품 룰렛</h3>
          <span>
            코딩하면서 가볍게 마시는 브랜드 커피 & 음료
            <br />
            스타벅스, 이디아, 빽다방 음료 경품에 도전해 보세요
          </span>
          <TicketBlock>
            {user ? (
              <p>
                <span>{user.id}</span>님 응모권 수{' '}
                <span className="count">
                  {missions.length - rewards.length}
                </span>
                회
              </p>
            ) : (
              <p>로그인해주세요</p>
            )}
          </TicketBlock>
          <RoulettePanel />
          {user && (
            <>
              <Button inline color="#007cff" onClick={onPercentage}>
                경품 확률
              </Button>
              <Button inline color="#7048e8" onClick={onReward}>
                당첨 내역
              </Button>
            </>
          )}
        </RouletteAreaBlock>
      </Wrap>
    </RouletteBlack>
  );
}

export default Roulette;
