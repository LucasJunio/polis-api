import { StateDTO } from 'src/module/dto/state.dto';

export abstract class IStateService {
  abstract read(): Promise<StateDTO[]>;
  abstract sayHello(): String;
}
