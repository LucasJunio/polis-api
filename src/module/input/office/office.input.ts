import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OfficeInput {
  @Field({ nullable: true })
  id: number;
  @Field()
  name: string;
}
