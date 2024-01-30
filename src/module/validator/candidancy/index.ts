import * as Joi from 'joi';

export const createCandidancyValidation = Joi.object({
  electionId: Joi.number().integer().required().messages({
    'number.base': `idState is a number (Integer).`,
  }),
});
