import { CityDTO } from 'src/module/dto/city.dto';
import { CityInput } from 'src/module/input/city/city.input';

export abstract class ICityRepository {
  abstract create(data: CityInput): Promise<CityDTO>;
  abstract read(): Promise<CityDTO[]>;
  abstract update(data: CityInput): Promise<CityDTO>;
  abstract delete(data: { id: number }): Promise<void>;
}
