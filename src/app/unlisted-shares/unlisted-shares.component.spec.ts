import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlistedSharesComponent } from './unlisted-shares.component';

describe('UnlistedSharesComponent', () => {
  let component: UnlistedSharesComponent;
  let fixture: ComponentFixture<UnlistedSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlistedSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlistedSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
