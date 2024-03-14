'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullName: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  return user;
};
