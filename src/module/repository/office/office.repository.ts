import { PrismaClient } from '@prisma/client';
import { OfficeDTO } from 'src/module/dto/office.dto';
import { OfficeInput } from 'src/module/input/office/office.input';
import { IOfficeRepository } from './office.repository.interface';

const prisma = new PrismaClient();

export class OfficeRepository implements IOfficeRepository {
  public async create(data: OfficeInput): Promise<OfficeDTO> {
    return await prisma.office.create({ data });
  }

  public async read(): Promise<OfficeDTO[]> {
    return await prisma.office.findMany();
  }

  public async update(data: OfficeInput): Promise<OfficeDTO> {
    const { id, name } = data;
    return await prisma.office.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  public async delete(data: { id: number }): Promise<void> {
    const { id } = data;

    const x = await prisma.office.delete({
      where: {
        id,
      },
    });
  }
}
