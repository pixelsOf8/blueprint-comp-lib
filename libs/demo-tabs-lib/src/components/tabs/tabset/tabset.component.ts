// Core
import { Component, Input, Output, ContentChildren, EventEmitter, AfterContentInit } from '@angular/core';
// Nested Component(s)
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})

export class TabSetComponent implements AfterContentInit {

  @Input() vertical;
  @Output() Select = new EventEmitter();
  @ContentChildren(TabComponent) tabs;

  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    const actives = this.tabs.filter(t => t.active);

    if (actives.length > 1) {
    } else if (!actives.length && tabs.length) {
      tabs[0].active = true;
    }
  }

  tabClicked(tab) {
    const tabs = this.tabs.toArray();

    tabs.forEach(tab => tab.active = false);
    tab.active = true;

    this.Select.emit(tab);
  }
}
