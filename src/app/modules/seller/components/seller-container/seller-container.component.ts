import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
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
    private _bottomSheet: MatBottomSheet,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // !Not needed auto hide currently
    // this.autoHideHeader();

    this.watchRoute();
  }

  // autoHideHeader() {
  //   this._ngZone.runOutsideAngular(() => {
  //     if (window.innerWidth < 960) {
  //       let prevScrollpos = window.pageYOffset;
  //       window.onscroll = function () {
  //         let currentScrollPos = window.pageYOffset;
  //         if (prevScrollpos > currentScrollPos) {
  //           document.getElementById('la-header').style.top = '0';
  //           document.getElementById('la-subHeader').style.top = '88px';
  //         } else {
  //           document.getElementById('la-header').style.top = '-88px';
  //           document.getElementById('la-subHeader').style.top = '-142px';
  //         }
  //         prevScrollpos = currentScrollPos;
  //       };
  //     }
  //   });
  // }

  openFilterDialog() {
    this._bottomSheet.open(SellerFilterComponent);
    // const dialogRef = this._dialog.open(SellerFilterComponent, {
    //   panelClass: ['full-screen-modal'],
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
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
