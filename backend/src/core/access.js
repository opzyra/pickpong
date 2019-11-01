import client from '../lib/client';
import { accessLogger } from '../core/logger';

const access = (req, res, next) => {
  const info = client(req);
  const id = req.user ? req.user.id : 'guest';
  const page = req.path || '';
  const uri = page.replace(/\?.*/, '');
  if (uri.includes('.')) {
    next();
    return;
  }
  accessLogger.info(`${info.ip}, ${info.device}, ${id}, ${uri}`);
  next();
};

export default access;
