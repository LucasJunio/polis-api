import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OfficeDTO } from 'src/module/dto/office.dto';
import { OfficeInput } from 'src/module/input/office/office.input';
import { OfficeService } from 'src/module/service/office/office.service';

@Resolver()
export class OfficeResolver {
  constructor(private readonly officeService: OfficeService) {}

  @Mutation((returns) => OfficeDTO)
  async create(@Args('params') params: OfficeInput): Promise<OfficeDTO> {
    return await this.officeService.create(params);
  }

  @Query((returns) => [OfficeDTO])
  async read(): Promise<OfficeDTO[]> {
    return await this.officeService.read();
  }

  @Mutation((returns) => OfficeDTO)
  async update(@Args('params') params: OfficeInput): Promise<OfficeDTO> {
    return await this.officeService.update(params);
  }

  @Mutation((returns) => String)
  async delete(@Args('params') params: OfficeInput): Promise<String> {
    const { id } = params;
    await this.officeService.delete({ id });
    return 'success';
  }
}
