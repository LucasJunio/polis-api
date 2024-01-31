import { StateDTO } from 'src/module/dto/state.dto';
import { CreateStateInput, UpdateStateInput } from 'src/module/input/state/state.input';

export abstract class IStateRepository {
  abstract create(data: CreateStateInput): Promise<StateDTO>;
  abstract read(): Promise<StateDTO[]>;
  abstract update(data: UpdateStateInput): Promise<StateDTO>;
  abstract delete(data: { id: number }): Promise<StateDTO>;
}
