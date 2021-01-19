import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreationComponent } from './new-creation.component';

describe('NewCreationComponent', () => {
  let component: NewCreationComponent;
  let fixture: ComponentFixture<NewCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
