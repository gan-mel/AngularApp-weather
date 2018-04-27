import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';

import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
   ],
  declarations: [ AppComponent, WeatherComponent ],
  providers: [WeatherService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
