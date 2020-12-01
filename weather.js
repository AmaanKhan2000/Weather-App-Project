class Weather{
  constructor(){
    this.API_KEY = 'f1398d09eff269d2db62132848cc8b7b';
  }

  async getWeather(city, country){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.API_KEY}`);

    const resWeather = await response.json();

    return resWeather;
  }
}