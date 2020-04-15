import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Les from '../models/les';

@Component({
  selector: 'app-les',
  templateUrl: './les.component.html',
  styleUrls: ['./les.component.scss']
})
export class LesComponent implements OnInit {

  @Input()
  public les: Les;

  @Output()
  public onFavorite: EventEmitter<any>;


  constructor() { 
    this.onFavorite = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  addToFavorite(){
    this.onFavorite.emit(this.les);
  }

}
