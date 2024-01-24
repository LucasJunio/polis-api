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
