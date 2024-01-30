import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef Election
 * @property {number} id Id
 * @property {string} name Name
 */
@ObjectType()
export class ElectionDTO {
  constructor(dto: Partial<ElectionDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;
  @Field()
  date: Date;
}
