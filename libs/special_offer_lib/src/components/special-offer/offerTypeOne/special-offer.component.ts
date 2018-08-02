import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-offer-one',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferOneComponent {

  @Input() title = 'Offer Heading';
  @Input() buttonText = 'Button text';
  @Input() imageName;
  @Input() directory = '/assets/images/offers';
  placeholderImage = 'https://bulma.io/images/placeholders/1280x960.png';

}
