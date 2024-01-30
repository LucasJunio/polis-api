import { RepresentativeDTO } from 'src/module/dto/representative.dto';
import { RepresentativeInput } from 'src/module/input/representative/representative.input';

export abstract class IRepresentativeRepository {
  abstract create(data: RepresentativeInput): Promise<RepresentativeDTO>;
  abstract read(): Promise<RepresentativeDTO[]>;
  abstract update(data: RepresentativeInput): Promise<RepresentativeDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
