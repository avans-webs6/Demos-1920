import { Injectable } from '@angular/core';
import Hero from './hero';

@Injectable({
  providedIn: 'root'
  // providedIn: HeroModule //Circular dependency :(
})
export class HeroService {
  
  //Volgene week://subjects vs observables, 
  //Observable<Hero[]>;
  //Subject<Hero>;
  private _heroes: Hero[];

  constructor(){
    this._heroes = [];
    this._heroes.push(new Hero("Batman", "Nanananananana Batman!"));
    this._heroes.push(new Hero("Superman", "Marthaaa!"));
  }

  public getHeroes(){
    return this._heroes;
  }
  
}

