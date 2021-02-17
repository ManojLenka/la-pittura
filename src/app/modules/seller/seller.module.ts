import { NgModule } from '@angular/core';

import { SellerRoutingModule } from './seller-routing.module';
import { CreationsComponent } from './components/creations/creations.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatStepperModule } from '@angular/material/stepper';
import { SellerContainerComponent } from './components/seller-container/seller-container.component';
import { SellerFilterComponent } from './components/seller-filter/seller-filter.component';
import { GoogleChartModule } from '../google-chart/google-chart.module';
import { NewCreationComponent } from './components/new-creation/new-creation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreationsComponent,
    EarningsComponent,
    SellerContainerComponent,
    SellerFilterComponent,
    NewCreationComponent,
  ],
  imports: [
    SellerRoutingModule,
    SharedModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatStepperModule,
    GoogleChartModule,
  ],
})
export class SellerModule {}
