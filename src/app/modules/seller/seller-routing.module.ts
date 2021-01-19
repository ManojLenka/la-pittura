import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerNavMap } from 'src/app/constants/navigation.constant';
import { CreationsComponent } from './components/creations/creations.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { NewCreationComponent } from './components/new-creation/new-creation.component';
import { SellerContainerComponent } from './components/seller-container/seller-container.component';

const routes: Routes = [
  {
    path: '',
    component: SellerContainerComponent,
    children: [
      {
        path: '',
        redirectTo: SellerNavMap.Creations,
        pathMatch: 'full',
      },
      {
        path: SellerNavMap.Creations,
        component: CreationsComponent,
        data: {
          current: SellerNavMap.Creations,
        },
      },
      {
        path: SellerNavMap.Earnings,
        component: EarningsComponent,
        data: {
          current: SellerNavMap.Earnings,
        },
      },
      {
        path: SellerNavMap.New,
        component: NewCreationComponent,
        data: {
          current: SellerNavMap.New,
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
