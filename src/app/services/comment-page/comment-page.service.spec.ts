import { TestBed } from '@angular/core/testing';

import { CommentPageService } from './comment-page.service';

describe('CommentPageService', () => {
  let service: CommentPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
