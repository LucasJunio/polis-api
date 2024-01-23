import { Query, Resolver } from '@nestjs/graphql';
import { StateDTO } from 'src/module/dto/state.dto';
import { StateService } from 'src/module/service/state/state.service';

@Resolver()
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Query((returns) => [StateDTO])
  async read() {
    return await this.stateService.read();
  }

  @Query(() => String)
  sayHello() {
    return this.stateService.sayHello();
  }
}
