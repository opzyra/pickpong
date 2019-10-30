import * as jwt from '../lib/jwt';

export default async function(req, res, next) {
  const { authorization } = req.headers;

  if (authorization === 'null' || !authorization) {
    req.user = null;
    return next();
  }

  let user;
  try {
    const token = authorization.replace(/^Bearer\s/, '');
    const decodedToken = await jwt.decode(token);
    user = decodedToken.user;
  } catch (error) {
    next(error);
  }

  // eslint-disable-next-line require-atomic-updates
  req.user = user;

  return next();
}
