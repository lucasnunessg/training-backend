const { User } = require('../models');

const getAll = async () => {
    const users = await user.findAll();
    return users;
}

const getById = async (id) => {
    const user = await user.findByPk(id);
  
    return user;
  };

  const getByIdAndEmail = async (id, email) => {
    const user = await user.findOne({ where: { id, email } });
  
    return user;
  };

  const createUser = async (fullName, contact, email) => {
    const newUser = await user.create({ fullName, contact, email });

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