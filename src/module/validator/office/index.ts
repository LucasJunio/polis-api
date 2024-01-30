import * as Joi from 'joi';

export const createOfficeValidation = Joi.object({
  name: Joi.string()
    .custom((value, helpers) => {
      if (value !== value.toUpperCase()) {
        return helpers.error('string.uppercase', { value });
      }
      return value;
    })
    .required()
    .messages({
      'string.base': 'name must be a string.',
      'any.required': 'name is required.',
    }),
});
