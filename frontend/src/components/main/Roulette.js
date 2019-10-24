import React from 'react';
import styled from 'styled-components';

import Wrap from '../common/Wrap';
import RoulettePanel from '../common/RoulettePanel';

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
  return (
    <RouletteBlack>
      <Wrap>
        <RouletteAreaBlock>
          <h3>행운의 경품 룰렛</h3>
          <span>
            스타벅스 커피, 편의점 상품권을 비롯한 다양한 경품에 도전해 보세요
          </span>
          <TicketBlock>
            <p>
              <span>opzyra</span>님 응모권 수 <span className="count">3</span>회
            </p>
          </TicketBlock>
          <RoulettePanel></RoulettePanel>
        </RouletteAreaBlock>
      </Wrap>
    </RouletteBlack>
  );
}

export default Roulette;
