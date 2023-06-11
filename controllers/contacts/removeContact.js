const { Contact } = require("../../models/contacts_mongoose");

const HttpError = require("../../helpers/HttpError");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findOneAndDelete({ _id: contactId });

  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json(result);
};

// module.exports = { removeContact: ctrlWrapper(removeContact) };
module.exports = removeContact;
