import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepoButtonComponent } from './create-repo-button.component';

describe('CreateRepoButtonComponent', () => {
  let component: CreateRepoButtonComponent;
  let fixture: ComponentFixture<CreateRepoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
