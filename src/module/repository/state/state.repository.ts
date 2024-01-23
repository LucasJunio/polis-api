import { PrismaClient } from '@prisma/client';
import { StateDTO } from 'src/module/dto/state.dto';
import { IStateRepository } from './state.repository.interface';

const prisma = new PrismaClient();

export class StateRepository implements IStateRepository {
  public async create(): Promise<void> {
    // return await prisma.currentAccount.create({ data });
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
