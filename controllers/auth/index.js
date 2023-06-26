const { ctrlWrapper } = require("../../utils");

const register = require("./auth");
const login = require("./login");

const authContrrollers = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};

module.exports = authContrrollers;
