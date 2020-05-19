import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { flatMap, filter, map, switchMap } from 'rxjs/operators';
import { Observable, observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-my-blog-list',
  templateUrl: './my-blog-list.component.html',
  styleUrls: ['./my-blog-list.component.scss']
})
export class MyBlogListComponent implements OnChanges {

  //ook een optie!
  //i.p.v zelf subscriben op de user, wachten we hier gewoon tot we het UID binnen krijgen. 
  //scheelt weer een stap in de query
  @Input()
  public uid: String;

  blogs$: Observable<any[]>;


  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.blogs$ = this.getMyBlogs();
  }

  getMyBlogs(){

    //zelf een observable maken? Dat willen we liever niet
    //dit ding moet een observable returnen
    //het probleem
    //return this.auth.user.subscribe(u => {
    //   this.firestore.collection('blogs').valueChanges()
    //     .subscribe(blogs => {
    //       console.log('updates!');
    //       this.myblogs = blogs.filter((b: any) => b.author == u.uid);
    //     })
    // })


    //filter on client
    return this.auth.user
      .pipe(switchMap((user) => {
        return this.firestore.collection('blogs').valueChanges()
          .pipe(map(blogs => {
            return blogs.filter((b : any) => b.author = user.uid);
          }))
      }));


    //filter on firebase
    //return this.auth.user
    //   .pipe(switchMap((user) => {
    //     return this.firestore.collection('blogs', ref => ref.where('author', '==', user.uid))
    //       .valueChanges();
    //   }));


  }

}
