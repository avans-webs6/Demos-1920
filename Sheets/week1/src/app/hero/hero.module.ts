import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeroListComponent, HeroComponent,
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule,
  ],
  //Anders mag app.js er geen gebruik van maken
  exports: [ HeroListComponent, HeroComponent] 
})
export class HeroModule { }
