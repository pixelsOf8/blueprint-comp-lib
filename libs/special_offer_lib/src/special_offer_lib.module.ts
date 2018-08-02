import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferOneComponent } from './components/special-offer/offerTypeOne/special-offer.component';
import { SpecialOfferTwoComponent } from './components/special-offer/offerTypeTwo/special-offer.component';

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
export class DemoSpecialOfferLibModule {}
