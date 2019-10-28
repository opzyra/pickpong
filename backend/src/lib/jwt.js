import jwt from 'jsonwebtoken';

const { JWT_SECRET: secret } = process.env;

export const generate = async payload => {
  delete payload.user.token;

  const options = {
    issuer: 'pickpong.kr',
    expiresIn: '7d',
  };
  return await jwt.sign(payload, secret, options);
};

export const decode = async token => {
  return await jwt.verify(token, secret);
};
