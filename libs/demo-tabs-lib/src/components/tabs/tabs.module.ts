// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { TabSetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabSetComponent,
    TabComponent
  ],
  exports: [
    TabSetComponent,
    TabComponent
  ]
})
export class TabsLibModule { }
