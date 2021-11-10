import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoitemComponent } from './repoitem.component';

describe('RepoitemComponent', () => {
  let component: RepoitemComponent;
  let fixture: ComponentFixture<RepoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
