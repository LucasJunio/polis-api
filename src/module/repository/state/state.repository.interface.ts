import { StateDTO } from 'src/module/dto/state.dto';

export abstract class IStateRepository {
  abstract create(): Promise<void>;
  abstract read(): Promise<StateDTO[]>;
  abstract update(): Promise<void>;
  abstract delete(): Promise<void>;
}
