import { Injectable } from '@nestjs/common';
import { IStateService } from './state.service.interface';

export type Result = {
  helloWorld: String;
};

@Injectable()
export class StateService implements IStateService {
  constructor() {}
  create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  read(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public sayHello(): String {
    const helloWorld = 'Hello World';
    return 'Hello World';
  }
}
