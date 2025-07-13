import { Component } from '@angular/core';
import type { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

type BarChartOptions = ChartConfiguration<'bar'>['options'];
type BarChartData = ChartConfiguration<'bar'>['data'];

@Component({
    selector: 'd-compare-gh-users-stars',
    templateUrl: './compare-gh-users-stars.component.html',
    imports: [NgChartsModule]
})
export class CompareGhUsersStarsComponent {
    chartOptions: BarChartOptions = { responsive: false };
    chartData: BarChartData = {
        labels: ['user1', 'user2', 'user3'],
        datasets: [{
            data: [59, 88, 125]
        }]
    };
}
