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

User.findById = async function(id) {
  const { dataValues } = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return dataValues;
};

export default User;
