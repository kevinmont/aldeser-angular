import { Component, OnInit } from '@angular/core';
import { HomeService} from '../../services/home.service/home.service'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any = [];
  constructor(private services: HomeService) { }

   ngOnInit() {
     this.services.getEvents().subscribe(
      res => {this.events = res},
      error => console.log(error)
     )
  }

}
