import { Component, HostListener, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', { packages: ['corechart', 'table'] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.drawChart();
  }

  private drawChart() {
    let data = this.gLib.visualization.arrayToDataTable([
      ['Year', 'Online', 'Offline'],
      ['2018', 143, 322],
      ['2019', 545, 460],
      ['2020', 120, 18],
      ['2021', 220, 134],
    ]);

    let chart = new this.gLib.visualization.LineChart(
      document.getElementById('divLineChart')
    );

    var options = {
      // width: 600,
      title: 'Sales on YOY',
      legend: {
        position: 'bottom',
        alignment: 'center',
      },
      titleTextStyle: {
        color: '#795548', // any HTML string color ('red', '#cc00cc')
        fontName: 'Roboto', // i.e. 'Times New Roman'
        fontSize: '16', // 12, 18 whatever you want (don't specify px)
        bold: true, // true or false
        italic: false, // true of false
      },
    };

    chart.draw(data, options);
  }
}
