import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API_URI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(`${this.API_URI}/home`);
  }

  getEvents() {
    console.log(`${this.API_URI}/eventos`)
    return this.http.get(`${this.API_URI}/eventos`);
  }
}
