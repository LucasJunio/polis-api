import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CityDTO } from 'src/module/dto/city.dto';
import { CityInput } from 'src/module/input/city/city.input';
import { CityService } from 'src/module/service/city/city.service';

@Resolver()
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Mutation((returns) => CityDTO)
  async create(@Args('params') params: CityInput): Promise<CityDTO> {
    return await this.cityService.create(params);
  }

  @Query((returns) => [CityDTO])
  async read(): Promise<CityDTO[]> {
    return await this.cityService.read();
  }

  @Mutation((returns) => CityDTO)
  async update(@Args('params') params: CityInput): Promise<CityDTO> {
    return await this.cityService.update(params);
  }

  @Mutation((returns) => String)
  async delete(@Args('params') params: CityInput): Promise<String> {
    const { id } = params;
    await this.cityService.delete({ id });
    return 'success';
  }
}
