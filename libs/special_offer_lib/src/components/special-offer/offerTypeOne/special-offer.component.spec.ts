import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferOneComponent } from './special-offer.component';

describe('SpecialOfferOneComponent', () => {
  let component: SpecialOfferOneComponent;
  let fixture: ComponentFixture<SpecialOfferOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOfferOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOfferOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
