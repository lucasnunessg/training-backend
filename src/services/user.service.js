const { User } = require('../models');
const { Sequelize, DataTypes } = require('sequelize');


const getAll = async () => {
    const users = await User.findAll();
    console.log(users);
    return users;
}

const getById = async (id) => {
    const user = await User.findByPk(id);
  
    return User;
  };

  const getByIdAndEmail = async (id, email) => {
    const user = await User.findOne({ where: { id, email } });
  
    return User;
  };

  const createUser = async (fullName, contact, email) => {
    const newUser = await User.create({ fullName, contact, email });

    return newUser
  }

  const updateUser = async (id, fullName, contact, email) => {
    const [updateUser] = await User.update(
        { fullName, contact, email },
        { where: { id }},
        );
        return updateUser
  }

  const deleteUser = async (id) => {
    const user = await User.destroy(
      { where: { id } },
    );

    return user;
    
  };
module.exports = {
    getAll,
    getById,
    getByIdAndEmail,
    createUser,
    updateUser,
    deleteUser,
};