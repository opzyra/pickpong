import Sequelize from 'sequelize';
import db from '../db';
import User from './User';

const Mission = db.define(
  'mission',
  {
    idx: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    fk_user_idx: Sequelize.UUID,
    type: Sequelize.INTEGER,
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['fk_user_idx', 'type'],
      },
    ],
  },
);

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

export default Mission;
