import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Blog } from '../blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: Observable<Blog[]>;

  public selected: any;
  private isLoggedIn: boolean;


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }


  public delete(key: string)
  {
      this.blogService.deleteBlog(key);
  }

}
