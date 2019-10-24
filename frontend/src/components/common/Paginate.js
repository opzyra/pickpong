import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const PaginateBlock = styled.div`
  ul {
    margin: 16px 0px;
  }

  li {
    display: inline-block;
    cursor: pointer;
    margin: 0px 8px;
  }

  li.active {
    color: #6f5afd;
    font-weight: bold;
  }
  a {
    outline: none;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
`;

function Paginate({ pageCount }) {
  return (
    <PaginateBlock>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {}}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </PaginateBlock>
  );
}

Paginate.defaultProps = {
  pageCount: 1,
};

export default Paginate;
