import Sequelize from 'sequelize';
import db from '../db';
import User from './User';

const Reward = db.define('reward', {
  idx: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  fk_user_idx: Sequelize.UUID,
  type: Sequelize.INTEGER,
});

Reward.associate = () => {
  Reward.belongsTo(User, {
    foreignKey: 'fk_user_idx',
    onDelete: 'CASCADE',
    onUpdate: 'restrict',
  });
};

Reward.findAllByIdx = async function(idx) {
  const rewards = await Reward.findAll({
    where: { fk_user_idx: idx },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return rewards;
};

export default Reward;
