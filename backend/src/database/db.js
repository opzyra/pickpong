import Sequelize from 'sequelize';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST || '',
  dialect: 'mysql',
  define: {
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
