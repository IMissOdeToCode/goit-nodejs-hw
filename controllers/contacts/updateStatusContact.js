const { Contact } = require("../../models/contacts_mongoose");

const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json(result);
};

// module.exports = { updateStatusContact: ctrlWrapper(updateStatusContact) };
module.exports = updateStatusContact;
