import { BadRequestException, Injectable } from '@nestjs/common';
import { RepresentativeDTO } from 'src/module/dto/representative.dto';
import { RepresentativeInput } from 'src/module/input/representative/representative.input';
import { RepresentativeRepository } from 'src/module/repository/representative/representative.repository';
import { createRepresentativeValidation } from 'src/module/validator/representative';
import { IRepresentativeService } from './representative.service.interface';

@Injectable()
export class RepresentativeService implements IRepresentativeService {
  constructor(private readonly representativeRepository: RepresentativeRepository) {}

  public async create(params: RepresentativeInput): Promise<RepresentativeDTO> {
    const { error } = createRepresentativeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.representativeRepository.create(params);
  }

  public async read(): Promise<RepresentativeDTO[]> {
    return this.representativeRepository.read();
  }
  public async update(params: RepresentativeInput): Promise<RepresentativeDTO> {
    const { error } = createRepresentativeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.representativeRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createRepresentativeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.representativeRepository.delete(params);
  }
}
