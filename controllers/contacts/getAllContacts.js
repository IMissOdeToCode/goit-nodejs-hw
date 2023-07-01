const { Contact } = require("../../models/contacts_mongoose");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "name email");
  res.json(result);
};

// module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
module.exports = getAllContacts;
