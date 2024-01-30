import { CityDTO } from 'src/module/dto/city.dto';
import { CityInput } from 'src/module/input/city/city.input';

export abstract class ICityService {
  abstract create(params: CityInput): Promise<CityDTO>;
  abstract read(): Promise<CityDTO[]>;
  abstract update(params: CityInput): Promise<CityDTO>;
  abstract delete(params: { id: number }): Promise<void>;
}
