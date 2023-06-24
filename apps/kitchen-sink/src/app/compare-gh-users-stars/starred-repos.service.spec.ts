import { TestBed } from '@angular/core/testing';

import { StarredReposService } from './starred-repos.service';

describe('StarredReposService', () => {
    let service: StarredReposService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StarredReposService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
