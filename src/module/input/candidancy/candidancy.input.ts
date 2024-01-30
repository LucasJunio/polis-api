import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CandidancyInput {
  @Field({ nullable: true })
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
