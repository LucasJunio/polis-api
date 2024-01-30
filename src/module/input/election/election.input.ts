import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ElectionInput {
  @Field({ nullable: true })
  id: number;
  @Field()
  date: Date;
}
