import { Component, OnInit } from '@angular/core';
import { MausamService } from '../mausam.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  foreCastData: any;
  city: string = '';
  currentHour!: number;

  constructor(private mausamService: MausamService) {}

  ngOnInit() {
     this.currentHour = new Date().getHours();
  }

      getUpcomingHours(hours: any[]) {
        const currentDate = new Date();
        const currentTimeEpoch = Math.floor(currentDate.getTime() / 1000); // Convert to epoch time
        return hours.filter(hour => hour.time_epoch > currentTimeEpoch).slice(0, 6);
    }

  getWeather(city: string) {
    this.mausamService.getWeatherData(city).subscribe(data => {
      this.weatherData = data;
    });
    this.getForecast(city);
  }

  getForecast(city: string) {
    this.mausamService.getForecastData(city).subscribe(data => {
      this.foreCastData = data;
      // console.log(this.foreCastData.forecast.forecastday[0].hour);
    });
  }
}
