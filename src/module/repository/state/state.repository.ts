import { PrismaClient } from '@prisma/client';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';
import { IStateRepository } from './state.repository.interface';

const prisma = new PrismaClient();

export class StateRepository implements IStateRepository {
  public async create(data: StateInput): Promise<StateDTO> {
    return await prisma.state.create({ data });
  }

  public async read(): Promise<StateDTO[]> {
    return await prisma.state.findMany();
  }

  public async update(data: StateInput): Promise<StateDTO> {
    const { id, name } = data;
    return await prisma.state.update({
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

    const x = await prisma.state.delete({
      where: {
        id,
      },
    });
  }
}
