import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoFundingComponent } from './ipo-funding.component';

describe('IpoFundingComponent', () => {
  let component: IpoFundingComponent;
  let fixture: ComponentFixture<IpoFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoFundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
