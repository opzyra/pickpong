import React from 'react';
import styled from 'styled-components';

import { MdLockOpen } from 'react-icons/md';

import { useAuthState } from '../../contexts/auth/authContext';
import storage from '../../utils/storage';

const FooterBlock = styled.div`
  background: #494760;
  text-align: center;
  padding: 40px 0px;
  color: #ffffff;

  .logout {
    font-size: 16px;
    margin-bottom: 12px;
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;

    svg {
      margin-right: 4px;
    }
  }

  .info {
    margin-bottom: 12px;
    color: #647586;

    a {
      color: #647586;
      text-decoration: underline;
    }
  }

  ${({ theme }) => theme.mobile`
    padding: 24px 12px;
    font-size: 12px;
    line-height: 16px;

    .logout {
      font-size: 12px;
      margin-bottom: 8px;
    }
  `};
`;

function Footer() {
  const { user } = useAuthState();

  const onLogout = () => {
    storage.removeItem('access_token');
    window.location.href = '/';
  };

  return (
    <FooterBlock>
      {user && (
        <div className="logout" onClick={onLogout}>
          <MdLockOpen />
          로그아웃
        </div>
      )}
      <div className="info">
        Pickpong의 회원 정보는{' '}
        <a href="https://devhyun.com" target="_blank" rel="noopener noreferrer">
          Devhyun
        </a>
        으로 연동될 예정입니다. 자세한 내용은{' '}
        <a
          href="https://devhyun.com/policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          개인정보 처리방침
        </a>
        을 확인해주세요.
      </div>

      <div className="cp">Copyright ⓒ 2019 Pickpong All Rights Reserved.</div>
    </FooterBlock>
  );
}

export default Footer;
