import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorstateComponent } from './errorstate.component';

describe('ErrorstateComponent', () => {
  let component: ErrorstateComponent;
  let fixture: ComponentFixture<ErrorstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
