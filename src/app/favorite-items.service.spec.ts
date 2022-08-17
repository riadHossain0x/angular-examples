import { TestBed } from '@angular/core/testing';

import { FavoriteItemsService } from './favorite-items.service';

describe('FavoriteItemsService', () => {
  let service: FavoriteItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
