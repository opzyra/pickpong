import Sequelize from 'sequelize';
import db from '../db';
import Reward from './Reward';
import User from './User';

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

Comment.findAllByIdx = async idx => {
  const comments = await Comment.findAll({
    where: { fk_user_idx: idx },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return comments;
};

Comment.findAllPage = async (page = 1) => {
  const limit = 5;
  let offset = (page - 1) * limit;
  let comments = await Comment.findAll({
    include: [
      {
        model: Reward,
        attributes: [],
        include: [{ model: User, attributes: ['name'] }],
      },
    ],
    order: [['created_at', 'desc']],
    limit,
    offset,
    raw: true,
    attributes: ['contents', 'created_at'],
  });

  comments = comments.map(e => {
    e['name'] = e['reward.user.name'];
    delete e['reward.user.name'];
    return e;
  });

  return comments;
};

export default Comment;
