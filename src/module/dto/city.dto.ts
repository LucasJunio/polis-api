import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef City
 * @property {number} id Id
 * @property {string} name Name
 * @property {number} stateId stateId
 */
@ObjectType()
export class CityDTO {
  constructor(dto: Partial<CityDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  stateId: number;
}
