import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'd-compare-gh-users-stars',
    templateUrl: './compare-gh-users-stars.component.html',
    standalone: true,
    imports: [NgChartsModule]
})
export class CompareGhUsersStarsComponent {
    chartOptions: ChartConfiguration<'bar'>['options'] = { responsive: false };
    chartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['user1', 'user2', 'user3'],
        datasets: [{
            data: [59, 88, 125]
        }]
    };
}
