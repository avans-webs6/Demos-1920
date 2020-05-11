import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateComponent } from './blog-create.component';
import { BlogService } from '../blog.service';
import { MockBlogService } from 'src/testbed/mock-blog.service';
import { FormsModule } from '@angular/forms';

describe('BlogCreateComponent', () => {
  let component: BlogCreateComponent;
  let fixture: ComponentFixture<BlogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateComponent ],
      providers: [
        {provide: BlogService, useClass: MockBlogService},
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
