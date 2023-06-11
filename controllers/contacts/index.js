const { ctrlWrapper } = require("../../utils");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");
const removeContact = require("./removeContact");

const contactsContrrollers = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  removeContact: ctrlWrapper(removeContact),
};

module.exports = contactsContrrollers;
