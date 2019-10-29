import db from './db';

import { User, Mission, Reward, Comment, Email } from './models';

const associate = () => {
  Mission.associate();
  Reward.associate();
  Comment.associate();
  Email.associate();
};

const sync = async () => {
  associate();
  await db.sync();
};

export default sync;
