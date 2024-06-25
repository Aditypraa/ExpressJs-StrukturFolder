const UsersModel = require("../models/usersModel");

const index = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.status(200).json({ message: "Succes All Users", data: data });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const show = async (req, res) => {
  const { idUsers } = req.params;
  try {
    const [data] = await UsersModel.getUserById(idUsers);
    res.status(200).json({ message: "Succes Get Users", data: data });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const create = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res
      .status(400)
      .json({ message: "Anda Mengirimkan Data Yang salah", data: null });
  }

  try {
    await UsersModel.createUser(body);
    res.status(201).json({ message: "Succes Post Users", data: body });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const update = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(idUsers, body);
    res.status(201).json({
      message: "Succes Update Users",
      data: { id: idUsers, ...body },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const destroy = async (req, res) => {
  const { idUsers } = req.params;
  try {
    await UsersModel.deleteUser(idUsers);
    res.status(200).json({
      message: "Succes Delete Users",
      data: { id: idUsers },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

module.exports = { index, show, create, update, destroy };
