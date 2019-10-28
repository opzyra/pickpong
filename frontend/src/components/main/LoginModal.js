import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

import Modal from '../common/Modal';
import Button from '../common/Button';
import { useAuthState } from '../../contexts/auth/authContext';

import MissionLoginImage from '../../assets/images/mission-login.png';

const LoginModalContents = styled.div`
  padding: 32px;
  text-align: center;

  h4 {
    color: #007cff;
  }

  img {
    margin: 24px 0px;
    width: 200px;
  }

  svg {
    margin-top: 2px;
    margin-right: 8px;
  }

  .description {
    margin-bottom: 20px;
    line-height: 24px;
  }
`;

function LoginModal() {
  const authState = useAuthState();

  const onLogin = () => {
    window.location.href = authState.authUrl;
  };

  return (
    <Modal type="loginModal" width="460" height="460">
      <LoginModalContents>
        <h4>로그인이 필요합니다</h4>

        <img src={MissionLoginImage} alt="" />
        <div className="description">
          깃허브 로그인으로 연동되며 본 사이트에서 사용하는 정보는
          <br />
          깃허브에서 제공하는 정보를 취급합니다
        </div>
        <Button color="#007cff" onClick={onLogin}>
          <GoMarkGithub /> 로그인
        </Button>
      </LoginModalContents>
    </Modal>
  );
}

export default LoginModal;
