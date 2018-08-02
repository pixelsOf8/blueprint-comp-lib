import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offer-two',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferTwoComponent implements OnInit {

  @Input() title = 'Offer Heading';
  @Input() buttonText = 'Button text';
  @Input() textLink = 'Text link';
  @Input() imageName;

  imageDirectory: string;

  ngOnInit() {
    this.imageDirectory = '/assets/images/offers/';
  }

}
