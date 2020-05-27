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

    this.blog$.subscribe(blog => {

    })

    //observable< { name: 'my blog', contributers: [{}, {}]} >
  }

  getBlogWithContributors() {

    // return combineLatest([
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').valueChanges(),
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').collection('contributors').valueChanges(),
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').collection('stories').valueChanges(),
    //   this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').collection('sprints').valueChanges(),
    // ]).pipe(map((values: any[]) => { //[blog, contributers, storiess, sprints]
    //   let blog = values[0];
    //   blog.contributors = values[1];
    //   return blog;
    // }))

    //result: blog met contributers
    return this.firestore.collection('blogs').doc('Q8rT9uhKwRtbWNPUZPHP').valueChanges()
      .pipe(switchMap((blog: any) => { //wissel de ene observable om met de andere
        
        //this is where the magic happens
        //[ observable, observable ] != observable<any[]>
        let contributors$ = blog.contributors.map(cid => this.firestore.collection('users').doc(cid).valueChanges());
        
        return combineLatest(contributors$)
          .pipe(map(contributors => { //[user1, user2, user3]
            blog.contributors = contributors;
            return blog;
          }))
      }))

  }
}
