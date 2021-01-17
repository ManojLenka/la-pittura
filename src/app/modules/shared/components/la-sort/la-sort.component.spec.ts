import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSortComponent } from './la-sort.component';

describe('LaSortComponent', () => {
  let component: LaSortComponent;
  let fixture: ComponentFixture<LaSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
