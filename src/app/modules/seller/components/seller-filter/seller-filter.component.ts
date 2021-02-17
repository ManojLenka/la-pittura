import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AvailabilityLists,
  AvailabilityMap,
  CategoryLists,
  CategoryMap,
  QueryParamKey,
} from 'src/app/constants/navigation.constant';
import { LaSortComponent } from 'src/app/modules/shared/components/la-sort/la-sort.component';

@Component({
  selector: 'app-seller-filter',
  templateUrl: './seller-filter.component.html',
  styleUrls: ['./seller-filter.component.scss'],
})
export class SellerFilterComponent implements OnInit {
  categoryLists = CategoryLists;
  categoryMap = CategoryMap;
  availabilityLists = AvailabilityLists;
  availabilityMap = AvailabilityMap;
  queries = {
    category: this.categoryLists[0],
    availability: this.availabilityLists[0],
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _bottomSheetRef: MatBottomSheetRef<LaSortComponent>,
    // private _dialogRef: MatDialogRef<SellerFilterComponent>
  ) {}

  ngOnInit(): void {
    this.watchQueryParams();
  }

  watchQueryParams() {
    const categoryValue = this._route.snapshot.queryParamMap.get(
      QueryParamKey.category
    );
    if (
      !!categoryValue &&
      categoryValue !== this.queries.category &&
      this.categoryLists.includes(categoryValue)
    ) {
      this.queries.category = categoryValue;
    }

    const availabilityValue = this._route.snapshot.queryParamMap.get(
      QueryParamKey.availability
    );
    if (
      !!availabilityValue &&
      availabilityValue !== this.queries.category &&
      this.availabilityLists.includes(availabilityValue)
    ) {
      this.queries.availability = availabilityValue;
    }
  }

  applyFilter() {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: this.queries,
      queryParamsHandling: 'merge',
    });
    // this._dialogRef.close();
    this._bottomSheetRef.dismiss();
  }

  clearFilter() {
    this.queries = {
      availability: this.availabilityLists[0],
      category: this.categoryLists[0],
    };
    this.applyFilter();
  }
}
