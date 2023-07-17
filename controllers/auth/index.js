const { ctrlWrapper } = require("../../utils");

const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubType = require("./updateSubType");

const authContrrollers = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubType: ctrlWrapper(updateSubType),
};

module.exports = authContrrollers;
