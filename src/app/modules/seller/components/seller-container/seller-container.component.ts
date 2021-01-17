import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import {
  SellerNavMap,
  SellerNavs,
} from 'src/app/constants/navigation.constant';
import { LaSortComponent } from 'src/app/modules/shared/components/la-sort/la-sort.component';
import { AuthService } from 'src/app/services/auth.service';
import { SellerFilterComponent } from '../seller-filter/seller-filter.component';

@Component({
  selector: 'app-seller-container',
  templateUrl: './seller-container.component.html',
  styleUrls: ['./seller-container.component.scss'],
})
export class SellerContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  currentWindow: string;
  sellerNavs = SellerNavs;
  sellerNavMap = SellerNavMap;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.watchRoute();
  }

  openFilterDialog() {
    const dialogRef = this._dialog.open(SellerFilterComponent, {
      panelClass: ['full-screen-modal'],
      // maxWidth: '100vw',
      // maxHeight: '100vh',
      // height: '100%',
      // width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(LaSortComponent);
  }

  identify(index: number, item: string) {
    return item;
  }

  watchRoute() {
    this.currentWindow = this._route.snapshot.firstChild.data.current;
    this.subscriptions.push(
      this._router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this._route),
          map((route) => {
            while (route.firstChild) route = route.firstChild;
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)
        )
        .subscribe((data) => {
          this.currentWindow = data.current;
        })
    );
  }

  updateRoute(route: string) {
    this._router.navigate([`${route}`], {
      relativeTo: this._route,
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
