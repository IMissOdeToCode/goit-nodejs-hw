const express = require("express");

const { validateBody } = require("../../utils");

const { isValidId, authenticate } = require("../../middlewares");

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

router.patch(
  "/:id/subscription",
  authenticate,
  isValidId,
  validateBody(schemas.updateSubType),

  ctrl.updateSubType
);

module.exports = router;
