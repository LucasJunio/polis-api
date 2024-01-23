import { Injectable } from '@nestjs/common';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateRepository } from 'src/module/repository/state/state.repository';
import { IStateService } from './state.service.interface';

@Injectable()
export class StateService implements IStateService {
  constructor(private readonly stateRepository: StateRepository) {}

  public async read(): Promise<StateDTO[]> {
    return this.stateRepository.read();
  }
  public sayHello(): String {
    return 'Olá Mundo';
  }
}
