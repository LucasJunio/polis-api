import { CityRepository } from './city/city.repository';
import { OfficeRepository } from './office/office.repository';
import { RepresentativeRepository } from './representative/representative.repository';
import { StateRepository } from './state/state.repository';

export const repositories = [StateRepository, OfficeRepository, CityRepository, RepresentativeRepository];
