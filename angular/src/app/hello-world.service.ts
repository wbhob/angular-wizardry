import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  say(word: string) {
    // This is a contrived example
    return word;
  }

  getDate() {
    return new Date();
  }

}
