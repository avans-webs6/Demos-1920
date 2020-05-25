import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  blog$: Observable<any>;
  contributors$: Observable<any>;

  constructor(private firestore: AngularFirestore){

  }

  ngOnInit(): void {
    this.blog$ = this.getBlogWithContributors();
  }

  getBlogWithContributors(){

    // return combineLatest([
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').valueChanges(),
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').collection('contributors').valueChanges()
    // ]).pipe(map((values: any[]) => {
    //   let blog = values[0];
    //   blog.contributors = values[1];
    //   return blog;
    // }))

    return this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').valueChanges()
      .pipe(switchMap((blog: any) => {
        
        //this is where the magic happens
        let contributors$ = blog.contributors.map(cid => this.firestore.collection('users').doc(cid).valueChanges());
        
        return combineLatest(contributors$)
          .pipe(map(contributors => {
            blog.contributors = contributors;
            return blog;
          }))
     

      }))

  }
}
