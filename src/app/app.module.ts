import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App routing
import { AppRoutingModule } from './app.routing';

// Main Component
import { AppComponent } from './app.component';

// Custom Component(s)
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
