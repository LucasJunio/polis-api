import { Module } from '@nestjs/common';

import { repositories } from '../repository';
import { services } from '../service';
import { graphQlConfig } from './config/graphql.config';
import { resolvers } from './resolver';

@Module({
  imports: [graphQlConfig],
  providers: [...resolvers, ...services, ...repositories],
})
export class GraphQlModule {}
