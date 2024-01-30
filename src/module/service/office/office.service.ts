import { BadRequestException, Injectable } from '@nestjs/common';
import { OfficeDTO } from 'src/module/dto/office.dto';
import { OfficeInput } from 'src/module/input/office/office.input';
import { OfficeRepository } from 'src/module/repository/office/office.repository';
import { createOfficeValidation } from 'src/module/validator/office';
import { IOfficeService } from './office.service.interface';

@Injectable()
export class OfficeService implements IOfficeService {
  constructor(private readonly officeRepository: OfficeRepository) {}

  public async create(params: OfficeInput): Promise<OfficeDTO> {
    const { error } = createOfficeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.officeRepository.create(params);
  }

  public async read(): Promise<OfficeDTO[]> {
    return this.officeRepository.read();
  }
  public async update(params: OfficeInput): Promise<OfficeDTO> {
    const { error } = createOfficeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    return this.officeRepository.update(params);
  }

  public async delete(params: { id: number }): Promise<void> {
    const { error } = createOfficeValidation.validate(params);
    if (error) throw new BadRequestException(error.message);
    this.officeRepository.delete(params);
  }
}
