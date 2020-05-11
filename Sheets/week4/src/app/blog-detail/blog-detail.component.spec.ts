import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailComponent } from './blog-detail.component';
import { BlogService } from '../blog.service';
import { MockBlogService } from 'src/testbed/mock-blog.service';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailComponent ],
      providers: [
        FormBuilder,
        {provide: BlogService, useClass: MockBlogService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    component.key = "test";
    component.ngOnChanges(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a blog on creation', (done) => {
    component.blog.valueChanges().subscribe(b => {
      expect(b.name).toEqual("Blog A");
      done();
    })
  });

//   it('should update blog on key stroke', (done) => {
//     fixture.debugElement.query

//     let nameBox = fixture.debugElement.query(By.css('input[name="name"]'));
//     sendInput(nameBox, 'Blog A').then(() => {
//         expect(component).toBeTruthy();
//     })
//   });

    function sendInput(inputElement: any, text: string) {
        inputElement.value = text;
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        return fixture.whenStable();
    }
});
