import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFilterComponent } from './seller-filter.component';

describe('SellerFilterComponent', () => {
  let component: SellerFilterComponent;
  let fixture: ComponentFixture<SellerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
