import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Wrap from '../common/Wrap';
import Paginate from '../common/Paginate';
import {
  useCommentState,
  useCommentDispatch,
} from '../../contexts/comment/commentContext';
import { fetchComments } from '../../contexts/comment/commentAction';

const CommentBlock = styled.div`
  background: #e9e0d7;
  padding: 80px 0px;

  ${({ theme }) => theme.mobile`
    padding: 52px 12px;  
  `};
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
    margin-bottom: 12px;
  }

  .description {
    margin-bottom: 32px;
    line-height: 24px;
  }

  ${({ theme }) => theme.mobile`
    padding: 20px 8px;
    border-radius: 16px;

    &::before {
      display: none;
    }
    &::after {
      display:none;
    }
    .description {
      font-size: 14px;
      margin-bottom: 24px;
      line-height: 20px;
    }
  `};
`;

const TableBlock = styled.div`
  min-height: 288px;
  table {
    width: 100%;

    thead {
      background: #f5f3f6;
    }

    th {
      font-weight: 500;
    }

    th,
    td {
      padding: 16px 0px;
    }

    td.contents {
      text-align: left;
    }
  }

  ${({ theme }) => theme.mobile`
    padding: 0px;
    min-height: 346px;

    &::before {
      display: none;
    }
    &::after {
      display:none;
    }
    table {
      th, td {
        font-size: 14px;
      }
      .date {
        display: none;
      }
    }
  `};
`;

function Comment() {
  const { comments } = useCommentState();
  const { items, page, count, pageCount } = comments;

  const commentDispatch = useCommentDispatch();

  const onPageChange = ({ selected }) => {
    fetchComments(commentDispatch, selected + 1);
  };

  return (
    <CommentBlock>
      <Wrap>
        <CommentArea>
          <h4>소통의 공간을 마련했어요</h4>
          <div className="description">
            이벤트에 대한 후기, 평가 혹은 개발자 조언 등 무엇이든지 자유롭게
            획득하신 확성기로 남겨주세요 !
          </div>
          <TableBlock>
            <table>
              <colgroup>
                <col width="10%" />
                <col width="55%" />
                <col width="20%" />
                <col width="15%" />
              </colgroup>
              <thead>
                <tr>
                  <th className="number">번호</th>
                  <th>내용</th>
                  <th>닉네임</th>
                  <th className="date">일시</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="number">{count - index - (page - 1) * 5}</td>
                    <td className="contents">{item.contents}</td>
                    <td>{item.name}</td>
                    <td className="date">
                      {moment(item.created_at).format('YY.MM.DD HH:mm')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableBlock>
          {count !== 0 && (
            <Paginate pageCount={pageCount} onPageChange={onPageChange} />
          )}
        </CommentArea>
      </Wrap>
    </CommentBlock>
  );
}

export default Comment;
