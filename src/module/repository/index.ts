import { CityRepository } from './city/city.repository';
import { RepresentativeRepository } from './representative/representative.repository';
import { StateRepository } from './state/state.repository';

export const repositories = [StateRepository, CityRepository, RepresentativeRepository];
