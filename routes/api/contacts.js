const express = require("express");

const { contactsContrrollers: ctrl } = require("../../controllers");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contacts_mongoose");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
