const express = require("express");

const { validateBody } = require("../../utils");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

const { authContrrollers: ctrl } = require("../../controllers");

// signup
// register
// router.post("/register", ctrl.register);
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
// router.post("/login", ctrl.login);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
