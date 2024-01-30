import { BadRequestException, Injectable } from '@nestjs/common';
import { ElectionDTO } from 'src/module/dto/election.dto';
import { ElectionInput } from 'src/module/input/election/election.input';
import { ElectionRepository } from 'src/module/repository/election/election.repository';
import { createElectionValidation } from 'src/module/validator/election';
import { IElectionService } from './election.service.interface';

@Injectable()
export class ElectionService implements IElectionService {
  constructor(private readonly electionRepository: ElectionRepository) {}

  public async create(params: ElectionInput): Promise<ElectionDTO> {
    const { error } = createElectionValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.electionRepository.create(params);
  }

  public async read(): Promise<ElectionDTO[]> {
    return this.electionRepository.read();
  }
  public async update(params: ElectionInput): Promise<ElectionDTO> {
    const { error } = createElectionValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.electionRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createElectionValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.electionRepository.delete(params);
  }
}
