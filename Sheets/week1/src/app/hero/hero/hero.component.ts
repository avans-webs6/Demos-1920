import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Hero from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input()
  public hero: Hero;

  public power: String;

  constructor() { 
    this.hero = new Hero();
    this.hero.name = 'Batman';
    this.hero.powers = ['Money', 'Good looks']
    this.hero.catchPhrase = "Na Na Na Na Na Na Na Na Batman!";
  }

  ngOnInit(): void {
  }

  addPower(){
    this.hero.powers.push(this.power);
  }

  kill(){
    this.onDeath.emit(this.hero);
  }

  //events
  @Output()
  public onDeath: EventEmitter<Hero> = new EventEmitter<Hero>();

}
