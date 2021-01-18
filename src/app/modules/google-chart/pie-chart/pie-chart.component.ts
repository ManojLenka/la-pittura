import { Component, HostListener, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
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
    let chart = new this.gLib.visualization.PieChart(
      document.getElementById('divPieChart')
    );
    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Accessories');
    data.addColumn('number', 'Quantity');
    data.addRows([
      ['Sculptures', 125],
      ['Paintings', 75],
      ['Handicrafts', 20],
    ]);

    var options = {
      // width: 600,
      title: 'Sales (Categories in 2021)',
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
