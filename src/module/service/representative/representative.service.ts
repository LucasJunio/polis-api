import { Injectable } from '@nestjs/common';

export type Result = {
  helloWorld: String;
};

@Injectable()
export class RepresentativeService {
  constructor() {}

  public sayHello(): Result {
    const helloWorld = 'Hello World';
    return { helloWorld };
  }
}
