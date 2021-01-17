import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckCustomerGuard } from './guards/check-customer/check-customer.guard';
import { CheckSellerGuard } from './guards/check-seller/check-seller.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckCustomerGuard],
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'seller',
    canActivate: [CheckSellerGuard],
    loadChildren: () =>
      import('./modules/seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
