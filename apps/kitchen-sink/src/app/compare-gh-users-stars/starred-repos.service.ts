import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StarredReposService {
    private http = inject(HttpClient);

    count(ghUsername: string): Observable<number>;
    count(ghUsername: string[]): Observable<number[]>;
    count(ghUsername: string | string[]): Observable<number|number[]> {
        if (typeof ghUsername === 'string') {
            return this.getStarCount(ghUsername);
        } else {
            return forkJoin(ghUsername.map(u => this.getStarCount(u)));
        }
    }

    private getStarCount(username: string): Observable<number> {
        const response = this.http.get<{ stars: number }>(
            'http://localhost:4200/api/github/stars',
            { params: { username }, mode: 'cors' }
        );
        return response.pipe(
            map((v) => v.stars),
            catchError(err => {
                console.error(err);
                return of(0);
            }),
        );
    }
}
