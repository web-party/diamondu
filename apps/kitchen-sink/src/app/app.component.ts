import { Component } from '@angular/core';
import { interval, repeat } from 'rxjs';
import { take, map, scan } from 'rxjs/operators';

@Component({
  selector: 'diamondu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private title = 'kitchen sink';

  characters$ = interval(200).pipe(
    take(this.title.length),
    map(v => this.title[v]),
    scan<string, string[]>((acc, curr) => [...acc, curr], []),
    repeat(3)
  );
}
