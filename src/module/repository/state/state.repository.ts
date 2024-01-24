import { PrismaClient } from '@prisma/client';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';
import { IStateRepository } from './state.repository.interface';

const prisma = new PrismaClient();

export class StateRepository implements IStateRepository {
  public async create(data: StateInput): Promise<StateDTO> {
    return await prisma.state.create({ data });
  }

  public async update(): Promise<void> {
    // const { id, total, custumerId } = data;
    // return await prisma.currentAccount.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    //     custumerId,
    //     total,
    //   },
    // });
  }

  public async read(): Promise<StateDTO[]> {
    return await prisma.state.findMany();
  }

  public async delete(): Promise<void> {}
}
