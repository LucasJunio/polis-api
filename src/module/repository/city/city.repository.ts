import { PrismaClient } from '@prisma/client';
import { CityDTO } from 'src/module/dto/city.dto';
import { CityInput } from 'src/module/input/city/city.input';
import { ICityRepository } from './city.repository.interface';

const prisma = new PrismaClient();

export class CityRepository implements ICityRepository {
  public async create(data: CityInput): Promise<CityDTO> {
    return await prisma.city.create({ data });
  }

  public async read(): Promise<CityDTO[]> {
    return await prisma.city.findMany();
  }

  public async update(data: CityInput): Promise<CityDTO> {
    const { id, name, stateId } = data;
    return await prisma.city.update({
      where: {
        id,
      },
      data: {
        name,
        stateId,
      },
    });
  }

  public async delete(data: { id: number }): Promise<void> {
    const { id } = data;

    const x = await prisma.city.delete({
      where: {
        id,
      },
    });
  }
}
