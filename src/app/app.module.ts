import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App routing
import { AppRoutingModule } from './app.routing';

// Main Component
import { AppComponent } from './app.component';

// Custom Component(s)
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { HeaderComponent } from '../../libs/header-lib';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
