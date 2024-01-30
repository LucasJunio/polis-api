import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ElectionDTO } from 'src/module/dto/election.dto';
import { ElectionInput } from 'src/module/input/election/election.input';
import { ElectionService } from 'src/module/service/election/election.service';

@Resolver()
export class ElectionResolver {
  constructor(private readonly electionService: ElectionService) {}

  @Mutation((returns) => ElectionDTO)
  async create(@Args('params') params: ElectionInput): Promise<ElectionDTO> {
    return await this.electionService.create(params);
  }

  @Query((returns) => [ElectionDTO])
  async read(): Promise<ElectionDTO[]> {
    return await this.electionService.read();
  }

  @Mutation((returns) => ElectionDTO)
  async update(@Args('params') params: ElectionInput): Promise<ElectionDTO> {
    return await this.electionService.update(params);
  }

  @Mutation((returns) => String)
  async delete(@Args('params') params: ElectionInput): Promise<String> {
    const { id } = params;
    await this.electionService.delete({ id });
    return 'success';
  }
}
