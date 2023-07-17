const { Contact } = require("../../models/contacts_mongoose");

const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findOneAndDelete({ _id: id });

  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json(result);
};

// module.exports = { removeContact: ctrlWrapper(removeContact) };
module.exports = removeContact;
