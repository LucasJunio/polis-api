import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

export const graphQlConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  autoSchemaFile: true,
  driver: ApolloDriver,
});

// GraphQLModule.forRoot({
//   autoSchemaFile: 'schema.gql',
//   context: ({ req }) => ({ req }),
//   playground: configuration().isLocal(),
//   debug: configuration().isLocal(),
//   installSubscriptionHandlers: true,
//   cors: {
//     origin: '*',
//     preflightContinue: true,
//     credentials: true,
//   },
//   // playground: {
//   //   settings: {
//   //     'editor.theme': 'dark',
//   //   },
//   //   ...(configuration().nodeEnv !== 'local'
//   //     ? {
//   //         endpoint: configuration().graphQl.endpoint,
//   //         debug: false,
//   //       }
//   //     : {}),
//   // },
// });
