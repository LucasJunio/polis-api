import { BadRequestException, Injectable } from '@nestjs/common';
import { CandidancyDTO } from 'src/module/dto/candidancy.dto';
import { CandidancyInput } from 'src/module/input/candidancy/candidancy.input';
import { CandidancyRepository } from 'src/module/repository/candidacy/candidacy.repository';
import { createCandidancyValidation } from 'src/module/validator/candidancy';
import { ICandidancyService } from './candidancy.service.interface';

@Injectable()
export class CandidancyService implements ICandidancyService {
  constructor(private readonly candidancyRepository: CandidancyRepository) {}

  public async create(params: CandidancyInput): Promise<CandidancyDTO> {
    const { error } = createCandidancyValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.candidancyRepository.create(params);
  }

  public async read(): Promise<CandidancyDTO[]> {
    return this.candidancyRepository.read();
  }
  public async update(params: CandidancyInput): Promise<CandidancyDTO> {
    const { error } = createCandidancyValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.candidancyRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createCandidancyValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.candidancyRepository.delete(params);
  }
}
