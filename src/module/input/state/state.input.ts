import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StateInput {
  @Field({ nullable: true })
  id?: number;
  @Field()
  name: string;
}
