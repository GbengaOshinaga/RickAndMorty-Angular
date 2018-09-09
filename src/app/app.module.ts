import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './/app-routing.module';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
