import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public heroes: Hero[];

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  remove(hero){
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  }

}
