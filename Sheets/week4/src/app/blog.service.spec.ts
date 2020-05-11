// import { TestBed } from '@angular/core/testing';
// import { BlogService } from './blog.service';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { MockBlogService } from '../testbed/mock-blog.service';

// let help = new MockBlogService();
// const data = help.getBlogs();

// const collectionStub = {
//   valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
// }

// const angularFiresotreStub = {
//   collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
// }

// describe('BlogService', () => {
//   let service: BlogService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: AngularFirestore, useClass: angularFiresotreStub}
//       ]
//     });
//     service = TestBed.inject(BlogService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
