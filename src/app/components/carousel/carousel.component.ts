import { Component, OnInit } from '@angular/core';
import { HomeService} from '../../services/home.service/home.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit  {

  images:any = [];

  constructor(private services: HomeService) { }

  ngOnInit() {
    this.services.getImages().subscribe(
      res => {this.images = res},
      error => console.log(error)
    )
  }

}
