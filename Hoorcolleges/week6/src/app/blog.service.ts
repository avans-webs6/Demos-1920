import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  getAll(){
    return this.firestore.collection('blogs').valueChanges()
      .pipe(map(blogs => {
        return blogs.map(b => new Blog(b));
      }))
  }
}
