import { ElectionDTO } from 'src/module/dto/election.dto';
import { ElectionInput } from 'src/module/input/election/election.input';

export abstract class IElectionRepository {
  abstract create(data: ElectionInput): Promise<ElectionDTO>;
  abstract read(): Promise<ElectionDTO[]>;
  abstract update(data: ElectionInput): Promise<ElectionDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
