import { Component, OnInit } from '@angular/core';
import { MausamService } from '../mausam.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  weather: any;
  weatherData: any;
  city: string = '';
  constructor(private mausamService: MausamService) { }
  ngOnInit() {
      
  }

  getWeather(city: string) {
    this.mausamService.getWeatherData(city).subscribe(data => {
      this.weatherData = data;
    });
  }
}
