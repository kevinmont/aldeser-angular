// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms';

// initial config
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// ours components
import { UsComponent } from './components/us/us.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';

// ours services
import { ContactService } from './services/contact.service/contact.service';
import { HomeService } from './services/home.service/home.service';


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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HomeService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
