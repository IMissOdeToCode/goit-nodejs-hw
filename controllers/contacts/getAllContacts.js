const { Contact } = require("../../models/contacts_mongoose");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // console.log("req.querry", req.query);
  const { page = 1, limit = 2 } = req.query;
  console.log(typeof page);
  console.log(typeof limit);
  console.log("page", page);
  console.log("limit", limit);
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

// module.exports = { getAllContacts: ctrlWrapper(getAllContacts) };
module.exports = getAllContacts;
