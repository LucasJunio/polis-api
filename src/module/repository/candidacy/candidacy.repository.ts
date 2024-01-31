import { PrismaClient } from '@prisma/client';
import { CandidancyDTO } from 'src/module/dto/candidancy.dto';
import { CandidancyInput } from 'src/module/input/candidancy/candidancy.input';
import { ICandidancyRepository } from './candidacy.repository.interface';

const prisma = new PrismaClient();

export class CandidancyRepository implements ICandidancyRepository {
  public async create(data: CandidancyInput): Promise<CandidancyDTO> {
    return await prisma.candidacy.create({ data });
  }

  public async read(): Promise<CandidancyDTO[]> {
    return await prisma.candidacy.findMany();
  }

  public async update(data: CandidancyInput): Promise<CandidancyDTO> {
    const { id } = data;
    return await prisma.candidacy.update({
      where: {
        id,
      },
      data,
    });
  }

  public async delete(data: { id: number }): Promise<void> {
    const { id } = data;

    const x = await prisma.candidacy.delete({
      where: {
        id,
      },
    });
  }
}
