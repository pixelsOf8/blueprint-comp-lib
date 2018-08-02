import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferTwoComponent } from './special-offer.component';

describe('SpecialOfferTwoComponent', () => {
  let component: SpecialOfferTwoComponent;
  let fixture: ComponentFixture<SpecialOfferTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOfferTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOfferTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
