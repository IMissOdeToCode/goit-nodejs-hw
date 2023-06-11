const { Contact } = require("../../models/contacts_mongoose");

// const HttpError = require("../helpers/HttpError");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

// module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
module.exports = getAllContacts;
