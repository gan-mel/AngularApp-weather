import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpModule
   ],
  declarations: [ AppComponent, WeatherComponent ],
  providers: [WeatherService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
