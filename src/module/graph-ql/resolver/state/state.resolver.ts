import { Query, Resolver } from '@nestjs/graphql';
import { StateService } from 'src/module/service/state/state.service';

@Resolver()
export class StateResolver {
  constructor(private readonly stateService: StateService) {}
  @Query(() => String)
  sayHello() {
    return this.stateService.sayHello();
  }
}
