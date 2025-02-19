import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Could not create user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.update({ name, email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Could not update user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete user" });
  }
};
