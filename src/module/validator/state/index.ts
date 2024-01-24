import * as Joi from 'joi';

export const createStateValidation = Joi.object({
  name: Joi.string().min(2).max(2).required().messages({
    'string.pattern.base': `name is a string.`,
  }),
});
