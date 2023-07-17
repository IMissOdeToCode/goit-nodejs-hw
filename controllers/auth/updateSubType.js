const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const updateSubType = async (req, res, next) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "User not found");
  }
  res.json(result.subscription);
};

module.exports = updateSubType;
