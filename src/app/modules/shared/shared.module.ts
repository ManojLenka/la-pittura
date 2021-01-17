import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { LaSortComponent } from './components/la-sort/la-sort.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LaSortComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatRadioModule,
    LaSortComponent,
    MatExpansionModule,
  ],
})
export class SharedModule {}
