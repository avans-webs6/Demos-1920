import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {

  public model: Blog = new Blog();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  public onSubmit(blog: Blog)
  {
    this.blogService.addBlog(blog);
    this.model = new Blog();
  }


}
