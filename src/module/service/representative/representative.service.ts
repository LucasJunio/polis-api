import { Injectable } from '@nestjs/common';

export type Result = {
  helloWorld: String;
};

@Injectable()
export class RepresentativeService {
  constructor() {}

  public sayHello(): String {
    const helloWorld = 'Hello World';
    return 'Hello World';
  }
}
