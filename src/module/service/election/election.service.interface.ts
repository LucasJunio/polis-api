import { ElectionDTO } from 'src/module/dto/election.dto';
import { ElectionInput } from 'src/module/input/election/election.input';

export abstract class IElectionService {
  abstract create(params: ElectionInput): Promise<ElectionDTO>;
  abstract read(): Promise<ElectionDTO[]>;
  abstract update(params: ElectionInput): Promise<ElectionDTO>;
  abstract delete(params: { id: number }): Promise<void>;
}
