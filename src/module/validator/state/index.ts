import * as Joi from 'joi';

export const createStateValidation = Joi.object({
  name: Joi.string()
    .min(2)
    .max(2)
    .custom((value, helpers) => {
      if (value !== value.toUpperCase()) {
        return helpers.error('string.uppercase', { value });
      }
      return value;
    })
    .required()
    .messages({
      'string.base': 'name must be a string.',
      'string.length': 'name must have a length of 2.',
      'any.required': 'name is required.',
    }),
});

export const updateStateValidation = Joi.object({
  id: Joi.number().integer().required().messages({
    'number.base': `id is a number (Integer).`,
  }),
  name: Joi.string()
    .min(2)
    .max(2)
    .custom((value, helpers) => {
      if (value !== value.toUpperCase()) {
        return helpers.error('string.uppercase', { value });
      }
      return value;
    })
    .messages({
      'string.base': 'name must be a string.',
      'string.length': 'name must have a length of 2.',
      'any.required': 'name is required.',
    }),
});

export const deleteStateValidation = Joi.object({
  id: Joi.number().integer().required().messages({
    'number.base': `id is a number (Integer).`,
  }),
});
