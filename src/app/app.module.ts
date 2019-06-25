import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { UsComponent } from './components/us/us.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppComponent } from './app.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeService} from './services/home.service';
import { EventsComponent } from './components/events/events.component';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsComponent,
    CarouselComponent,
    ServiciosComponent,
    ContactComponent,
    EventsComponent,
    ModalBasicComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
