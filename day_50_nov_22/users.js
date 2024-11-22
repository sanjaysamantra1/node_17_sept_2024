const users = [];
let idCounter = 1;

function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function addUser({ username, password }) {
  users.push({ id: idCounter++, username, password });
}

module.exports = { getUserByUsername, getUserById, addUser };
