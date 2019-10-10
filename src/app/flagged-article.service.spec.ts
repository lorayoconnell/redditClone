import { TestBed } from '@angular/core/testing';

import { FlaggedArticleService } from './flagged-article.service';

describe('FlaggedArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlaggedArticleService = TestBed.get(FlaggedArticleService);
    expect(service).toBeTruthy();
  });
});
