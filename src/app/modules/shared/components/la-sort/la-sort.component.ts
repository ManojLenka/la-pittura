import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  QueryParamKey,
  SortLists,
  SortMap,
} from 'src/app/constants/navigation.constant';

@Component({
  selector: 'app-la-sort',
  templateUrl: './la-sort.component.html',
  styleUrls: ['./la-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaSortComponent implements OnInit, OnDestroy {
  sortLists = SortLists;
  sortMap = SortMap;
  subscriptions: Subscription[] = [];
  queries = {
    sort: this.sortLists[0],
  };

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _route: ActivatedRoute,
    private _bottomSheetRef: MatBottomSheetRef<LaSortComponent>
  ) {}

  ngOnInit(): void {
    this.watchQueryParams();
  }

  watchQueryParams() {
    // this.subscriptions.push(
    //   this._route.queryParamMap.subscribe((q) => {
    //     if (
    //       q.has(QueryParamKey.sort) &&
    //       q.get(QueryParamKey.sort) !== this.queries.sort &&
    //       q.get(QueryParamKey.sort) in SortLists
    //     ) {
    //       this.queries.sort = q.get(QueryParamKey.sort);
    //     }
    //   })
    // );
    const sortValue = this._route.snapshot.queryParamMap.get(
      QueryParamKey.sort
    );
    if (
      !!sortValue &&
      sortValue !== this.queries.sort &&
      this.sortLists.includes(sortValue)
    ) {
      this.queries.sort = sortValue;
    }
  }

  applySort() {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: this.queries,
      queryParamsHandling: 'merge',
    });
    this.closeBottomSheet();
  }

  closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
