import React from 'react';
import styled from 'styled-components';

import Wrap from '../common/Wrap';
import Paginate from '../common/Paginate';

const CommentBlock = styled.div`
  background: #e9e0d7;
  padding: 80px 0px;
`;

const CommentArea = styled.div`
  padding: 36px 48px;
  background: #ffffff;
  text-align: center;
  box-shadow: 5px 5px 10px #dddddd;
  position: relative;

  &::before {
    content: '';
    width: 80px;
    height: 80px;
    border: transparent;
    border-left: 1px solid #dedede;
    position: absolute;
    top: -41px;
    left: -41px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #e9e0d7;
  }

  &::after {
    content: '';
    width: 80px;
    height: 80px;
    border: transparent;
    border-left: 1px solid #dedede;
    position: absolute;
    bottom: -41px;
    right: -41px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #e9e0d7;
  }

  h4 {
    margin-bottom: 24px;
  }

  table {
    width: 100%;

    thead {
      background: #f5f3f6;
    }

    th,
    td {
      padding: 16px 0px;
    }

    td.contents {
      text-align: left;
    }
  }
`;

function comment() {
  return (
    <CommentBlock>
      <Wrap>
        <CommentArea>
          <h4>소통 한마디! 함께 이야기 해요 ~</h4>
          <table>
            <colgroup>
              <col width="10%" />
              <col width="55%" />
              <col width="20%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>내용</th>
                <th>아이디</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="contents">
                  테스트로
                  올려봅니닿qwkdjhqwjkdhqwkjhdkljqwhdlkjwqhdkwqjhdklqjwhdjkqwdhklㅁㄴ이ㅏㅓㅂ지ㅏ어비자어ㅣㅈ버잊바ㅓㅣ아
                </td>
                <td>opzyra</td>
                <td>2019.10.24</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="contents">
                  테스트로
                  올려봅니닿qwkdjhqwjkdhqwkjhdkljqwhdlkjwqhdkwqjhdklqjwhdjkqwdhklㅁㄴ이ㅏㅓㅂ지ㅏ어비자어ㅣㅈ버잊바ㅓㅣ아
                </td>
                <td>opzyra</td>
                <td>2019.10.24</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="contents">
                  테스트로
                  올려봅니닿qwkdjhqwjkdhqwkjhdkljqwhdlkjwqhdkwqjhdklqjwhdjkqwdhklㅁㄴ이ㅏㅓㅂ지ㅏ어비자어ㅣㅈ버잊바ㅓㅣ아
                </td>
                <td>opzyra</td>
                <td>2019.10.24</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="contents">
                  테스트로
                  올려봅니닿qwkdjhqwjkdhqwkjhdkljqwhdlkjwqhdkwqjhdklqjwhdjkqwdhklㅁㄴ이ㅏㅓㅂ지ㅏ어비자어ㅣㅈ버잊바ㅓㅣ아
                </td>
                <td>opzyra</td>
                <td>2019.10.24</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="contents">
                  테스트로
                  올려봅니닿qwkdjhqwjkdhqwkjhdkljqwhdlkjwqhdkwqjhdklqjwhdjkqwdhklㅁㄴ이ㅏㅓㅂ지ㅏ어비자어ㅣㅈ버잊바ㅓㅣ아
                </td>
                <td>opzyra</td>
                <td>2019.10.24</td>
              </tr>
            </tbody>
          </table>
          <Paginate pageCount={50} />
        </CommentArea>
      </Wrap>
    </CommentBlock>
  );
}

export default comment;
