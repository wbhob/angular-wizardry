import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  say(greeting: string) {
    return `${greeting}, World!`;
  }

  getDate() {
    return new Date();
  }

}
