import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AkitaNgRouterStoreModule,
    AkitaNgDevtools.forRoot(),
    AkitaNgEffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
