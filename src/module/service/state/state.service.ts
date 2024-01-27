import { BadRequestException, Injectable } from '@nestjs/common';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';
import { StateRepository } from 'src/module/repository/state/state.repository';
import { createStateValidation } from 'src/module/validator/state';
import { IStateService } from './state.service.interface';

@Injectable()
export class StateService implements IStateService {
  constructor(private readonly stateRepository: StateRepository) {}

  public async create(params: StateInput): Promise<StateDTO> {
    const { error } = createStateValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.stateRepository.create(params);
  }

  public async read(): Promise<StateDTO[]> {
    return this.stateRepository.read();
  }
  public async update(params: StateInput): Promise<StateDTO> {
    const { error } = createStateValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.stateRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createStateValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.stateRepository.delete(params);
  }
}
