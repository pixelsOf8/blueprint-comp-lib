import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class TabComponent {

  @Input() title = '';
  @Input() url = '';
  @Input() active = false;
  @Input() disabled = false;

}
