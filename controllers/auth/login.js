const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const token = "iddqdiddqd";
  res.json({ token });
};

module.exports = login;
