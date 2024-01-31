import { PrismaClient } from '@prisma/client';
import { StateDTO } from 'src/module/dto/state.dto';
import { CreateStateInput, UpdateStateInput } from 'src/module/input/state/state.input';
import { IStateRepository } from './state.repository.interface';

const prisma = new PrismaClient();

export class StateRepository implements IStateRepository {
  public async create(data: CreateStateInput): Promise<StateDTO> {
    return await prisma.state.create({ data });
  }

  public async read(): Promise<StateDTO[]> {
    return await prisma.state.findMany();
  }

  public async update(data: UpdateStateInput): Promise<StateDTO> {
    const { id } = data;
    return await prisma.state.update({
      where: {
        id,
      },
      data,
    });
  }

  public async delete(data: { id: number }): Promise<StateDTO> {
    const { id } = data;

    return await prisma.state.delete({
      where: {
        id,
      },
    });
  }
}
