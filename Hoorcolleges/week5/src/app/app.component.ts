import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week5';

  constructor(public auth: AngularFireAuth){}

  login(name){
    this.auth.signInWithEmailAndPassword(name + '@blogs.nl', 'password');
  }

  logout(){

  }
}
