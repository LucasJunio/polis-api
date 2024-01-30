import { OfficeDTO } from 'src/module/dto/office.dto';
import { OfficeInput } from 'src/module/input/office/office.input';

export abstract class IOfficeRepository {
  abstract create(data: OfficeInput): Promise<OfficeDTO>;
  abstract read(): Promise<OfficeDTO[]>;
  abstract update(data: OfficeInput): Promise<OfficeDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
