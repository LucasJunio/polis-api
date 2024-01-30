import { PrismaClient } from '@prisma/client';
import { ElectionDTO } from 'src/module/dto/election.dto';
import { ElectionInput } from 'src/module/input/election/election.input';
import { IElectionRepository } from './election.repository.interface';

const prisma = new PrismaClient();

export class ElectionRepository implements IElectionRepository {
  public async create(data: ElectionInput): Promise<ElectionDTO> {
    return await prisma.election.create({ data });
  }

  public async read(): Promise<ElectionDTO[]> {
    return await prisma.election.findMany();
  }

  public async update(data: ElectionInput): Promise<ElectionDTO> {
    const { id, date } = data;
    return await prisma.election.update({
      where: {
        id,
      },
      data: {
        date,
      },
    });
  }

  public async delete(data: { id: number }): Promise<void> {
    const { id } = data;

    const x = await prisma.election.delete({
      where: {
        id,
      },
    });
  }
}
