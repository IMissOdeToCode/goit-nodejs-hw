const express = require("express");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contacts_mongoose");

const router = express.Router();

const { contactsContrrollers: ctrl } = require("../../controllers");

const { isValidId } = require("../../middlewares");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;
