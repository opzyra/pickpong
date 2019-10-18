import * as jwt from '../lib/jwt';

export default async function(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    req.user = null;
    return next();
  }

  try {
    const decoded = await jwt.decode(authorization);
    console.log(decoded);
  } catch (error) {
    next(error);
  }

  return next();
}
