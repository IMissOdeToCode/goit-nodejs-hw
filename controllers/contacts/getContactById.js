const { Contact } = require("../../models/contacts_mongoose");

const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  console.log("contactId", contactId);
  console.log(req.params);
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Contact not found");
  }
  res.json(result);
};

// module.exports = { getContactById: ctrlWrapper(getContactById) };
module.exports = getContactById;
