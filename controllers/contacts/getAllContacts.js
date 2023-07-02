const { Contact } = require("../../models/contacts_mongoose");

const getAllContacts = async (req, res) => {
  const { favorite } = req.query;
  const { _id: owner } = req.user;
  const { page = 1, limit = 2 } = req.query;

  const skip = (page - 1) * limit;
  const findParam = favorite ? { owner, favorite } : { owner };

  const result = await Contact.find(
    findParam,
    // { owner},
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "name email");
  res.json(result);
};

// module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
module.exports = getAllContacts;
