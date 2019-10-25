import Sequelize from 'sequelize';
import db from '../db';
import User from './User';

const Mission = db.define('mission', {
  idx: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  fk_user_idx: { type: Sequelize.UUID },
  type: Sequelize.INTEGER,
});

Mission.associate = () => {
  Mission.belongsTo(User, {
    foreignKey: 'fk_user_idx',
    onDelete: 'CASCADE',
    onUpdate: 'restrict',
  });
};

Mission.findById = async function(id) {
  const mission = await Mission.findOne({
    where: { id },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return mission;
};

Mission.findAllByIdx = async function(idx) {
  const missions = await Mission.findAll({
    where: { fk_user_idx: idx },
    raw: true,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  return missions;
};

Mission.insertOne = async function({ userIdx, type }) {
  await Mission.create({
    fk_user_idx: userIdx,
    type,
  });
};

export default Mission;
