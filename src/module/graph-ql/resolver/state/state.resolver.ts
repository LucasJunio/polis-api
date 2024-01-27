import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateInput } from 'src/module/input/state/state.input';
import { StateService } from 'src/module/service/state/state.service';

@Resolver()
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation((returns) => StateDTO)
  async create(@Args('params') params: StateInput): Promise<StateDTO> {
    return await this.stateService.create(params);
  }

  @Query((returns) => [StateDTO])
  async read(): Promise<StateDTO[]> {
    return await this.stateService.read();
  }

  @Mutation((returns) => StateDTO)
  async update(@Args('params') params: StateInput): Promise<StateDTO> {
    return await this.stateService.update(params);
  }

  @Mutation((returns) => String)
  async delete(@Args('params') params: StateInput): Promise<String> {
    const { id } = params;
    await this.stateService.delete({ id });
    return 'success';
  }
}
