const { Contact } = require("../../models/contacts_mongoose");

const HttpError = require("../../helpers/HttpError");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json(result);
};

// module.exports = { updateContact: ctrlWrapper(updateContact) };
module.exports = updateContact;
