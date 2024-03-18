
const { userService } = require('../services/user.service')

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json({ users });
  } catch (e) {
    console.log(e.message);
    
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
  
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Erro' });
    }
  };

  const getByIdAndEmail = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.query;
        const user = await userService.getByIdAndEmail(id, email);
    
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado!'})
        return res.status(200).json(user);
    }catch (e){
        console.log(e.message);
        res.status(500).json({ message: error500Message })
    }

  };

  const createUser = async (req,res) => {
try {
    const { fullName, email, contact } = req.body;
    const newUser = await userService.createUser(fullName, contact, email);
    return res.status(201).json(newUser); 
}catch (e){
    console.log(e.message)
    res.status(500).json({ message: error500Message })
}
     
};

const updateUser = async (req, res) => {
    try {
      const { fullName, email, contact } = req.body;
      const { id } = req.params;
      const updatedUser = await userService.updateUser(id, fullName, email, contact);
  
      if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };

  const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        deleteUser = await userService.deleteUser(id);
        return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch(e) {
        console.log(e.message)
        res.status(500).json({message: error500Message});
    }
  };

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};