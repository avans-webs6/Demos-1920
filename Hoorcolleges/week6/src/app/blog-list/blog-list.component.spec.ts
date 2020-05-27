import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';
import { BlogService } from '../blog.service';
import { of } from 'rxjs';
import { Blog } from '../blog';

const blogServiceMock = {
  getAll: () => {
    return of([new Blog({name: "blog 1", author: "stijn"}), new Blog({name: "blog 2", author: "bart"})]);
  }
}

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListComponent ],
      providers: [
        { provide: BlogService, useValue: blogServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
