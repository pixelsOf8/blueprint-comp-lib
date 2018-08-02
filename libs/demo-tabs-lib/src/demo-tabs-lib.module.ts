import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { TabComponent } from './components/tabs/tab/tab.component';
import { TabSetComponent } from './components/tabs/tabset/tabset.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabComponent,
    TabSetComponent
  ],
  exports: [
    TabComponent,
    TabSetComponent
  ]
})
export class DemoTabsLibModule {}
