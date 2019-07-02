import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  toggle : boolean=false;
  constructor() {
  }
  ngOnInit() {
  }
  public uniqueVisitorsLabels: Label[] = ['UNIQUE VISITORS', ];
  public uniqueVisitorsData: MultiDataSet = [
    [25, 33],
  ];
  public returningVisitorsLabels: Label[] = ['RETURNING VISITORS', ];
  public returningVisitorsData: MultiDataSet = [
    [21, 33],

  ];
  public percentVisitorsLabels: Label[] = ['% OF NEW VISITORS', ];
  public percentVisitorsData: MultiDataSet = [
    [79, 33],

  ];
  public bounceLabels: Label[] = ['BOUNCE RATE', ];
  public bounceData: MultiDataSet = [
    [55, 33],

  ];
 
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public pieChartLabels = ['Returning Visitors', 'New Visitors',]
  public pieChartData = [21, 79,]
  public pieChartType = 'pie'

  chartOptions = {
    responsive: true,
    
  };
  chartData = [

    { data: [ 65, 3,88,332,234,112,65, 145, 44, 275,47, 320,47, 22,], label: 'VISITS' }
  ];
  chartLabels = ['Nov 8', 'Nov 15', 'Nov 22', 'Nov 29'];

  toggleButton(){
    this.toggle=!this.toggle
    console.log('dkd')
  }

  progress = [
    {
      percent: 25,
      outerStrokeColor: '#0ff',
      innerStrokeColor: "#C7E596",
      name:'UNIQUE VISITORS'
    },
    {
      percent: 21,
      outerStrokeColor: '#FF6347',
      innerStrokeColor: "#C7E596",
      name:'RETURNING VISITORS'
    },
    {
      percent: 79,
      outerStrokeColor: '#0ff',
      innerStrokeColor: "#C7E596",
      name:'% OF NEW VISITS'
    },
    {
      percent: 55,
      outerStrokeColor: '#78C000',
      innerStrokeColor: "#C7E596",
      name:'BOUNCE RATE'
    },

  ]
}