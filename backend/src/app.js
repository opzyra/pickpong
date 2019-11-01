import './env';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import helmet from 'helmet';
import cors from 'cors';

import { endpoint, error } from './core/error';
import token from './core/token';
import access from './core/access';
import router from './router';

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: process.env.APP_CLIENT }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(token);
app.use(access);
app.use(router);
app.use(endpoint, error);

export default app;
