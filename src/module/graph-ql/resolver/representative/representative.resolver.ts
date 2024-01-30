import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RepresentativeDTO } from 'src/module/dto/representative.dto';
import { RepresentativeInput } from 'src/module/input/representative/representative.input';
import { RepresentativeService } from 'src/module/service/representative/representative.service';

@Resolver()
export class RepresentativeResolver {
  constructor(private readonly representativeService: RepresentativeService) {}

  @Mutation((returns) => RepresentativeDTO)
  async create(@Args('params') params: RepresentativeInput): Promise<RepresentativeDTO> {
    return await this.representativeService.create(params);
  }

  @Query((returns) => [RepresentativeDTO])
  async read(): Promise<RepresentativeDTO[]> {
    return await this.representativeService.read();
  }

  @Mutation((returns) => RepresentativeDTO)
  async update(@Args('params') params: RepresentativeInput): Promise<RepresentativeDTO> {
    return await this.representativeService.update(params);
  }

  @Mutation((returns) => String)
  async delete(@Args('params') params: RepresentativeInput): Promise<String> {
    const { id } = params;
    await this.representativeService.delete({ id });
    return 'success';
  }
}
