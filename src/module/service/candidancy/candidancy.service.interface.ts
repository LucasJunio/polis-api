import { CandidancyDTO } from 'src/module/dto/candidancy.dto';
import { CandidancyInput } from 'src/module/input/candidancy/candidancy.input';

export abstract class ICandidancyService {
  abstract create(params: CandidancyInput): Promise<CandidancyDTO>;
  abstract read(): Promise<CandidancyDTO[]>;
  abstract update(params: CandidancyInput): Promise<CandidancyDTO>;
  abstract delete(params: { id: number }): Promise<void>;
}
