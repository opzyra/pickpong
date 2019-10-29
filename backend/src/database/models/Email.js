import Sequelize from 'sequelize';
import db from '../db';
import Reward from './Reward';

const Email = db.define('email', {
  idx: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  fk_reward_idx: Sequelize.UUID,
  email: Sequelize.STRING(500),
  provide: Sequelize.BOOLEAN,
});

Email.associate = () => {
  Email.belongsTo(Reward, {
    foreignKey: 'fk_reward_idx',
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });
};

export default Email;
