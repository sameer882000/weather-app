import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MausamService {
  api_key = 'e6a8eaab82c9474ba3091629242206';
  uri = `https://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=`;
  uri1 = `https://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=`;
  // uri = 'hello';
  constructor(private http: HttpClient) {
  }
  
  getWeatherData(city: string) { 
    return this.http.get(`${this.uri}${city}`);

  }

  getForecastData(city: string) {
    return this.http.get(`${this.uri1}${city}`);
  }
}
