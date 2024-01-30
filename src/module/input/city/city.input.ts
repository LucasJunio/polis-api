import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CityInput {
  @Field({ nullable: true })
  id: number;
  @Field()
  name: string;
  @Field()
  stateId: number;
}
