import { Field, ObjectType } from '@nestjs/graphql';

/**
 * @typedef Candidancy
 * @property {number} id Id
 */
@ObjectType()
export class CandidancyDTO {
  constructor(dto: Partial<CandidancyDTO> = {}) {
    Object.assign(this, dto);
  }
  @Field()
  id: number;

  @Field()
  electionId: number;

  @Field()
  representativeId: number;

  @Field()
  officeId: number;

  @Field()
  cityId: number;
}
