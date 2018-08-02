import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Component(s)
import { ShowcaseComponent } from './components/showcase/showcase.component';

const appRoutes: Routes = [
  { path: '', component: ShowcaseComponent },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
