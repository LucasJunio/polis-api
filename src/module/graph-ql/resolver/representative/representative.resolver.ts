import { Query, Resolver } from '@nestjs/graphql';
// import Result from '../../../service/representative/representative.service';

@Resolver()
export class RepresentativeResolver {
  // constructor(private readonly representativeService: RepresentativeService) {}
  @Query(() => String)
  sayHello() {
    return `this.representativeService.sayHello()`;
  }
}
