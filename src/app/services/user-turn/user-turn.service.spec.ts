import { TestBed } from '@angular/core/testing';

import { UserTurnService } from './user-turn.service';

describe('UserTurnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTurnService = TestBed.get(UserTurnService);
    expect(service).toBeTruthy();
  });
});
