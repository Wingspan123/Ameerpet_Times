const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wgshe7j6_adds', 'wgshe7j6_ameerpet', 'Wingspan@143', {
  host: '162.241.123.162',
  dialect: 'mysql'
});

module.exports = sequelize;
