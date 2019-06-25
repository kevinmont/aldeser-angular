import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsComponent} from './components/us/us.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {ContactComponent} from './components/contact/contact.component';
import {EventsComponent} from './components/events/events.component';
import {ModalBasicComponent} from './components/modal-basic/modal-basic.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/index',
    pathMatch:'full'
  },
  {
    path:'index',
    component:CarouselComponent
  },
  {
    path:'nosotros',
    component:UsComponent
  },
  {
    path:'services',
    component:ServiciosComponent
  },
  {
    path:'contacto',
    component:ContactComponent

  },
  {
    path:'eventos',
    component:EventsComponent
  },
  {
    path:'modal',
    component: ModalBasicComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
