import { Component, ChangeDetectionStrategy, inject, input, Signal } from '@angular/core';
import type { ChartConfiguration, ChartDataset } from 'chart.js';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { StarredReposService } from './starred-repos.service';
import { toSignal } from '@angular/core/rxjs-interop';

type BarChartOptions = ChartConfiguration<'bar'>['options'];
type BarChartSeries = ChartDataset<'bar', number[]>['data'];

@Component({
    selector: 'd-compare-gh-users-stars',
    templateUrl: './compare-gh-users-stars.html',
    imports: [BaseChartDirective],
    providers: [provideCharts(withDefaultRegisterables())],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareGhUsersStars {
    private starredReposService = inject(StarredReposService);
    protected readonly usernames = input(['web-party', 'kjzl', 'vstelmakh']);
    protected chartOptions: BarChartOptions = { responsive: false };
    protected readonly series: Signal<BarChartSeries> = toSignal(
        this.starredReposService.count(this.usernames()),
        { initialValue: this.usernames().map(() => 0)}
    );
}
