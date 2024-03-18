'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  return User;
};
