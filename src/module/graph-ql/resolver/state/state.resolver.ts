import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StateDTO } from 'src/module/dto/state.dto';
import { CreateStateInput, DeleteCreateStateInput, UpdateStateInput } from 'src/module/input/state/state.input';
import { StateService } from 'src/module/service/state/state.service';

@Resolver()
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation((returns) => StateDTO)
  async createState(@Args('params') params: CreateStateInput): Promise<StateDTO> {
    return await this.stateService.create(params);
  }

  @Query((returns) => [StateDTO])
  async readState(): Promise<StateDTO[]> {
    return await this.stateService.read();
  }

  @Mutation((returns) => StateDTO)
  async updateState(@Args('params') params: UpdateStateInput): Promise<StateDTO> {
    return await this.stateService.update(params);
  }

  @Mutation((returns) => StateDTO)
  async deleteState(@Args('params') params: DeleteCreateStateInput): Promise<StateDTO> {
    const { id } = params;
    return await this.stateService.delete({ id });
  }
}
