import { CandidancyDTO } from 'src/module/dto/candidancy.dto';
import { CandidancyInput } from 'src/module/input/candidancy/candidancy.input';

export abstract class ICandidancyRepository {
  abstract create(data: CandidancyInput): Promise<CandidancyDTO>;
  abstract read(): Promise<CandidancyDTO[]>;
  abstract update(data: CandidancyInput): Promise<CandidancyDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
