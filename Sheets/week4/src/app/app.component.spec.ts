import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { By } from '@angular/platform-browser';



// An anonymous user
const authState: any = {
  displayName: "Test user",
  isAnonymous: false,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

//mock angular fire auth provider
const mockAngularFireAuth: any = {
  auth: jasmine.createSpyObj('auth', {
    'signInWithPopup': () => { return Promise.reject() },
    'signOut': () => { return Promise.reject() }
  }),
  authState: of(authState)
};

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
      declarations: [
        AppComponent, MockComponent(BlogCreateComponent), MockComponent(BlogListComponent)
      ],
    }).compileComponents();
  }));

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should nog render the login', () => {
    let welcome = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(welcome.innerHTML).toEqual('Hello Test user!');
  });
});
