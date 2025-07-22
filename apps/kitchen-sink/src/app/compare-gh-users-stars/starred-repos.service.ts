import { Injectable } from '@angular/core';
// import { Octokit } from 'octokit';

interface ViewItem {
    username: string;
    stars: number;
    // avatar
}

@Injectable({
    providedIn: 'root'
})
export class StarredReposService {
    // private octokit = new Octokit({ auth: `personal-access-token123` });

    // https://api.github.com/users/web-party/starred
    // https://octokit.github.io/rest.js/v19#activity-list-repos-starred-by-user
    count(ghUsername: string): ViewItem;
    count(ghUsername: string[]): ViewItem[];
    count(ghUsername: string | string[]): ViewItem | ViewItem[] {
        // this.octokit.rest.users
        if (typeof ghUsername === 'string') {
            return { username: ghUsername, stars: 0 };
        } else {
            return [];
        }
    }
}
