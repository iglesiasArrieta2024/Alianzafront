import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboarRoutingModule } from './modules/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboarRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
