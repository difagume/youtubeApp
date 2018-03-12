import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para usar los servicios del HttpClient
import { HttpClientModule } from '@angular/common/http';

// Servicio
import {YoutubeService} from './services/youtube.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
