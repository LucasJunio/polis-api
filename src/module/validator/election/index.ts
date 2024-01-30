import * as Joi from 'joi';

export const createElectionValidation = Joi.object({
  date: Joi.date().required(),
});
