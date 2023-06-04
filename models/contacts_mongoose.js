const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const phoneRegExp = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: phoneRegExp,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required"`,
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" is required"`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().required().pattern(phoneRegExp).messages({
    "any.required": `"phone" is required"`,
    "string.empty": `"phone" cannot be empty`,
  }),
  favorite: Joi.boolean().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const schemas = { addSchema, updateFavoriteSchema };

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
