import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

const firestoreMock = {
  collection: () => {
    return {
      valueChanges: () => {
        return of({}) //hoe ziet de fire store data er uit?
      }
    }
  }
}

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: firestoreMock}
      ]
    });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 10 objects of type Blog');
});
