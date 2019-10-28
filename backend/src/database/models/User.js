import Sequelize from 'sequelize';
import db from '../db';

const User = db.define('user', {
  idx: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  id: { type: Sequelize.STRING(50), unique: 'id' },
  name: Sequelize.STRING,
  avatar: Sequelize.STRING,
  token: Sequelize.STRING,
});

User.findByIdx = async function(idx) {
  const user = await User.findOne({
    where: { idx },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return user;
};

User.findById = async function(id) {
  const user = await User.findOne({
    where: { id },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return user;
};

export default User;
