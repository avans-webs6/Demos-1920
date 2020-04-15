import { Component } from '@angular/core';
import Les from './models/les';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hello world';

  lessen: Les[] = [
    { naam: "Advanced Javascript", code: "Webs6" },
    { naam: "Design patterns", code: "DP" }
  ];

  showMessage(les) {
    alert(les.naam);
  }

}
