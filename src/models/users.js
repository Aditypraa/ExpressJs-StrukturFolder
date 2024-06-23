const dbPoll = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPoll.execute(SQLQuery);
};

const getUserById = (idUsers) => {
  const SQLQuery = `SELECT * FROM users WHERE id = ${idUsers}`;
  return dbPoll.execute(SQLQuery);
};

const createUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`;
  return dbPoll.execute(SQLQuery);
};

const updateUser = (idUsers, body) => {
  const SQLQuery = `UPDATE users 
                    SET name = '${body.name}', email = '${body.email}', address = '${body.address}' 
                    WHERE id = ${idUsers}`;
  return dbPoll.execute(SQLQuery);
};

const deleteUser = (idUsers) => {
  const SQLQuery = `DELETE FROM users WHERE id = ${idUsers}`;
  return dbPoll.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
