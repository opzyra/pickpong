import { errorLogger } from './logger';

// eslint-disable-next-line no-unused-vars
export const endpoint = (req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
  return;
};

// eslint-disable-next-line no-unused-vars
export const error = (error, req, res, next) => {
  errorLogger.error(error.stack);
  res.status(500).json({ message: 'System Error' });
  return;
};
