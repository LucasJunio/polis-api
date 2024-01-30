import { RepresentativeDTO } from 'src/module/dto/representative.dto';
import { RepresentativeInput } from 'src/module/input/representative/representative.input';

export abstract class IRepresentativeService {
  abstract create(params: RepresentativeInput): Promise<RepresentativeDTO>;
  abstract read(): Promise<RepresentativeDTO[]>;
  abstract update(params: RepresentativeInput): Promise<RepresentativeDTO>;
  abstract delete(params: { id: number }): Promise<void>;
}
