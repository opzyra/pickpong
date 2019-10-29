import Sequelize from 'sequelize';
import db from '../db';
import Reward from './Reward';

const Comment = db.define('comment', {
  idx: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  fk_reward_idx: Sequelize.UUID,
  contents: Sequelize.STRING(500),
});

Comment.associate = () => {
  Comment.belongsTo(Reward, {
    foreignKey: 'fk_reward_idx',
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });
};

Comment.findAllByIdx = async function(idx) {
  const comments = await Comment.findAll({
    where: { fk_user_idx: idx },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return comments;
};

export default Comment;
