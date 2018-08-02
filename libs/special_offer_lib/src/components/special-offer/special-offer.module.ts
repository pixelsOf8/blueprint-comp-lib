import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferOneComponent } from './offerTypeOne/special-offer.component';
import { SpecialOfferTwoComponent } from './offerTypeTwo/special-offer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      SpecialOfferOneComponent,
      SpecialOfferTwoComponent
  ],
  exports: [
      SpecialOfferOneComponent,
      SpecialOfferTwoComponent
  ]
})
export class SpecialOffersModule { }
