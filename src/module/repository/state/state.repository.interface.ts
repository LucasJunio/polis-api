import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';

export abstract class IStateRepository {
  abstract create(params: StateInput): Promise<StateDTO>;
  abstract read(): Promise<StateDTO[]>;
  abstract update(): Promise<void>;
  abstract delete(): Promise<void>;
}
