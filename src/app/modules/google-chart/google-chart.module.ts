import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [LineChartComponent, PieChartComponent],
  imports: [CommonModule, ServiceModule],
  exports: [LineChartComponent, PieChartComponent],
})
export class GoogleChartModule {}
