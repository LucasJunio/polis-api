import { Query, Resolver } from '@nestjs/graphql';
import { RepresentativeService } from 'src/module/service/representative/representative.service';
// import Result from '../../../service/representative/representative.service';

@Resolver()
export class RepresentativeResolver {
  constructor(private readonly representativeService: RepresentativeService) {}
  @Query((returns) => [String])
  sayHello() {
    return this.representativeService.sayHello();
  }
}
