import { BadRequestException, Injectable } from '@nestjs/common';
import { CityDTO } from 'src/module/dto/city.dto';
import { CityInput } from 'src/module/input/city/city.input';
import { CityRepository } from 'src/module/repository/city/city.repository';
import { createCityValidation } from 'src/module/validator/city';
import { ICityService } from './city.service.interface';

@Injectable()
export class CityService implements ICityService {
  constructor(private readonly cityRepository: CityRepository) {}

  public async create(params: CityInput): Promise<CityDTO> {
    const { error } = createCityValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.cityRepository.create(params);
  }

  public async read(): Promise<CityDTO[]> {
    return this.cityRepository.read();
  }
  public async update(params: CityInput): Promise<CityDTO> {
    const { error } = createCityValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.cityRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createCityValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.cityRepository.delete(params);
  }
}
