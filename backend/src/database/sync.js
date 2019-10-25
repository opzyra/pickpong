import db from './db';

import { User, Mission } from './models';

const associate = () => {
  Mission.associate();
};

const sync = async () => {
  associate();
  await db.sync();
};

export default sync;
