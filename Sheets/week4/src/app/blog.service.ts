import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { flatMap   } from 'rxjs/operators';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private store: AngularFirestore) { }

  getBlog(key) : AngularFirestoreDocument<Blog>{
    return this.store.collection<Blog>('blogs').doc<Blog>(key);
  }

  getBlogs() : Observable<Blog[]>{
    return this.store.collection<Blog>('blogs').valueChanges({ idField: 'id'});
  }

  addBlog(blog: Blog)
  {
    this.store.collection<Blog>('/blogs').add({...blog});
  }

  updateBlog(blog: Blog){

  }

  deleteBlog(key: String){
    this.store.doc('/blogs/' + key).delete();
  }

  // getMyBlogs(userId: string) : Observable<any[]> {
  //   return this.firestore.collection<any>('users').doc(userId)
  //     .valueChanges()
  //     .pipe(flatMap((user: any) => {
  //       let blogObervable : Observable<any>[] = user.blogs.map(blogId => {
  //         return this.firestore.collection('blogs').doc(blogId);
  //       })
  //     }))
  // }
}
