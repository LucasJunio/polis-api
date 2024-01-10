import { Module } from '@nestjs/common';
import { services } from '../service';
import { graphQlConfig } from './config/graphql.config';
import { resolvers } from './resolver';

@Module({
  imports: [graphQlConfig],
  providers: [...resolvers, ...services],
})
export class GraphQlModule {}
