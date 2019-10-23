import React from 'react';
import styled from 'styled-components';

import Wrap from '../common/Wrap';

const RouletteBlack = styled.div`
  background: #ded7e1;
  padding: 48px 0px;
`;

const TicketBlock = styled.div``;

function Roulette() {
  return (
    <RouletteBlack>
      <Wrap>
        <TicketBlock></TicketBlock>
      </Wrap>
    </RouletteBlack>
  );
}

export default Roulette;
