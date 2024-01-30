import { OfficeDTO } from 'src/module/dto/office.dto';
import { OfficeInput } from 'src/module/input/office/office.input';

export abstract class IOfficeService {
  abstract create(params: OfficeInput): Promise<OfficeDTO>;
  abstract read(): Promise<OfficeDTO[]>;
  abstract update(params: OfficeInput): Promise<OfficeDTO>;
  abstract delete(params: { id: number }): Promise<void>;
}
