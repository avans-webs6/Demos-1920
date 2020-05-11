import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';
import { MockBlogService } from 'src/testbed/mock-blog.service';
import { BlogService } from '../blog.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';

//Mock blog-details-component
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { Component } from '@angular/core';

//Mock value​
const mockAngularFireAuth: any = {​
  auth: jasmine.createSpyObj('auth', {​
  'signInWithPopup': () => Promise.reject() ,​
  'signOut': () => Promise.reject() 
  }),​
  authState: of(null)​
};

describe('BlogListComponent', () => {

  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListComponent, MockComponent(BlogDetailComponent)],
      providers: [
        {provide: BlogService, useClass: MockBlogService }, //hele class
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //de echte unit test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two blogs on startup', (done) => {
    component.blogs.subscribe(b => {
      expect(b.length).toEqual(2);
      done();
    })
  })
});
