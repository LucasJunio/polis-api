import { PrismaClient } from '@prisma/client';
import { RepresentativeDTO } from 'src/module/dto/representative.dto';
import { RepresentativeInput } from 'src/module/input/representative/representative.input';
import { IRepresentativeRepository } from './representative.repository.interface';

const prisma = new PrismaClient();

export class RepresentativeRepository implements IRepresentativeRepository {
  public async create(data: RepresentativeInput): Promise<RepresentativeDTO> {
    return await prisma.representative.create({ data });
  }

  public async read(): Promise<RepresentativeDTO[]> {
    return await prisma.representative.findMany();
  }

  public async update(data: RepresentativeInput): Promise<RepresentativeDTO> {
    const { id, name } = data;
    return await prisma.representative.update({
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

    const x = await prisma.representative.delete({
      where: {
        id,
      },
    });
  }
}
