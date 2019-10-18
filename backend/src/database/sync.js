import db from './db';

import { User } from './models';

const sync = async () => {
  await db.sync();
};

export default sync;
