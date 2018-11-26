import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    let h = HEROES;
    console.log(h);
    return HEROES;
  }
}
