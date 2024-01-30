import { CityResolver } from './city/city.resolver';
import { RepresentativeResolver } from './representative/representative.resolver';
import { StateResolver } from './state/state.resolver';

//add here all resolvers for graphql.
export const resolvers = [RepresentativeResolver, StateResolver, CityResolver];
