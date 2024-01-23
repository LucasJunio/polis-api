import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef State
 * @property {number} id Id
 * @property {string} name Name
 */
@ObjectType()
export class StateDTO {
  constructor(dto: Partial<StateDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;
  @Field()
  name: string;
}
