import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStateInput {
  @Field()
  name: string;
}

@InputType()
export class UpdateStateInput {
  @Field()
  id: number;
  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class DeleteCreateStateInput {
  @Field()
  id: number;
}
