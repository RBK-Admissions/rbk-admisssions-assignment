import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NavigateComponent } from './navigate/navigate.component';

@NgModule({
  declarations: [
  AppComponent,
  NavigateComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  BrowserAnimationsModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
