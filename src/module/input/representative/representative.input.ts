import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RepresentativeInput {
  @Field({ nullable: true })
  id: number;
  @Field()
  name: string;
}
