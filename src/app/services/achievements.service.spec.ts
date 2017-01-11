/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AchievementsService } from './achievements.service';

describe('AchievementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementsService]
    });
  });

  it('should ...', inject([AchievementsService], (service: AchievementsService) => {
    expect(service).toBeTruthy();
  }));
});
