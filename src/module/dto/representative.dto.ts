import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef Representative
 * @property {number} id Id
 * @property {string} name Name
 */
@ObjectType()
export class RepresentativeDTO {
  constructor(dto: Partial<RepresentativeDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;
  @Field()
  name: string;
}
