import { NgModule } from '@angular/core';

import { SellerRoutingModule } from './seller-routing.module';
import { CreationsComponent } from './components/creations/creations.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SellerContainerComponent } from './components/seller-container/seller-container.component';
import { SellerFilterComponent } from './components/seller-filter/seller-filter.component';

@NgModule({
  declarations: [
    CreationsComponent,
    EarningsComponent,
    SellerContainerComponent,
    SellerFilterComponent,
  ],
  imports: [
    SellerRoutingModule,
    SharedModule,
    MatMenuModule,
    MatBottomSheetModule,
  ],
})
export class SellerModule {}
