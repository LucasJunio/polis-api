import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';

export abstract class IStateService {
  abstract create(params: StateInput): Promise<StateDTO>;
  abstract read(): Promise<StateDTO[]>;
}
