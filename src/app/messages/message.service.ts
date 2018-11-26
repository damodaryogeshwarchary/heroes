import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }
 
  clear() {
    this.messages = [];
  }
}
