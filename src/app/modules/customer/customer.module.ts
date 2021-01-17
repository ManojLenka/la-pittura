import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerContainerComponent } from './components/customer-container/customer-container.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [CustomerContainerComponent],
  imports: [CommonModule, CustomerRoutingModule, MatBottomSheetModule],
})
export class CustomerModule {}
