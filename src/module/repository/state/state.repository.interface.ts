import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';

export abstract class IStateRepository {
  abstract create(data: StateInput): Promise<StateDTO>;
  abstract read(): Promise<StateDTO[]>;
  abstract update(data: StateInput): Promise<StateDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
