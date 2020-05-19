import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs$: Observable<any>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.blogs$ = this.firestore.collection('blogs').valueChanges({ idField: 'id'});
  }

  update(blog){
    this.firestore.collection('blogs').doc(blog.id).update({
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

}
