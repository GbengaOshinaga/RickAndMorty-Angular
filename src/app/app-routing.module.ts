import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'location', component: LocationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
