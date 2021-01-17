import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerContainerComponent } from './seller-container.component';

describe('SellerContainerComponent', () => {
  let component: SellerContainerComponent;
  let fixture: ComponentFixture<SellerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
