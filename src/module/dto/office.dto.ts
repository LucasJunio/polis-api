import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef Office
 * @property {number} id Id
 * @property {string} name Name
 */
@ObjectType()
export class OfficeDTO {
  constructor(dto: Partial<OfficeDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;
  @Field()
  name: string;
}
