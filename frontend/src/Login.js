import React from 'react';

function Login() {
  return (
    <div className="App">
      <a href="https://github.com/login/oauth/authorize?client_id=b82991dc418733d59988&redirect_uri=http://localhost:3000/callback">
        로그인
      </a>
    </div>
  );
}

export default Login;
