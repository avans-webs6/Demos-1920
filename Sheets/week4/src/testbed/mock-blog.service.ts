import { of } from 'rxjs';

export class MockBlogService {

  constructor() { }

  getBlogs(){​
    return of([​
      {id: "1", name: "Blog A", author: "Author A", date: new Date(2000, 0, 1)},​ 
      {id: "1", name: "Blog A", author: "Author A", date: new Date(2001, 0, 1)},​   
    ])​  
  }

  updateBlog(){}

  addBLogs(){
    //return null; mag leeg zijn
  }

  getBlog(key: any){
    return {
      valueChanges: function(){
        return of({id: "1", name: "Blog A", author: "Author A", date: new Date(2000, 0, 1)});
      }
    }
  }
}