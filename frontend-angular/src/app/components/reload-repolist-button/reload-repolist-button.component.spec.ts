import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadRepolistButtonComponent } from './reload-repolist-button.component';

describe('ReloadRepolistButtonComponent', () => {
  let component: ReloadRepolistButtonComponent;
  let fixture: ComponentFixture<ReloadRepolistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadRepolistButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadRepolistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
