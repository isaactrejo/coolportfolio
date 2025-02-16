import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ArtfolioComponent } from './components/artfolio/artfolio.component';
export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'artwork', component: ArtfolioComponent},
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
