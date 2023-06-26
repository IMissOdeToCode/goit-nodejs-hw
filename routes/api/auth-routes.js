const express = require("express");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/user");

const router = express.Router();

const { authContrrollers: ctrl } = require("../../controllers");

// signup
// register
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
// router.post("/register", ctrl.register);

module.exports = router;
