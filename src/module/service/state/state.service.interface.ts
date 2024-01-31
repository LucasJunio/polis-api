import { StateDTO } from 'src/module/dto/state.dto';
import { CreateStateInput, UpdateStateInput } from 'src/module/input/state/state.input';

export abstract class IStateService {
  abstract create(params: CreateStateInput): Promise<StateDTO>;
  abstract read(): Promise<StateDTO[]>;
  abstract update(params: UpdateStateInput): Promise<StateDTO>;
  abstract delete(params: { id: number }): Promise<StateDTO>;
}
