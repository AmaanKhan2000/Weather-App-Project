class UI{
  constructor(){
    this.output = document.querySelector('.weather-output');
    this.time = document.querySelector('.time-output')
  }
  showWeather(data,description,icon){
    this.output.innerHTML = `
    <div class="row">
    <div class="col s6 left">
      <p class="lead"><i class="fas fa-map-marker-alt"></i> ${data.name}, ${data.sys.country}</p>
      <p class="fontB">${(description).charAt(0).toUpperCase() + (description).slice(1)}</p>
      <img class="center" src='http://openweathermap.org/img/wn/${icon}@2x.png' alt="">
      <h1>${((data.main.temp)-273).toFixed(2)}<sup>o</sup>C</h1>
      <p class="fontB">H:${((data.main.temp_max)-273).toFixed(2)}  L:${((data.main.temp_min)-273).toFixed(2)}</p>
    </div>
    <div class="col s6 left">
      <div class = "mt-2">
        <p class="fontBig"><i class="fas fa-eye"></i> Visibility: ${data.visibility}</p>
        <p class="fontBig mt-2">Humidity: ${data.main.humidity}%</p>
        <p class="fontBig mt-2">Feels Like: ${((data.main.feels_like)-273).toFixed(2)}<sup>o</sup>C</p>
        <p class="fontBig mt-2">Pressure: ${data.main.pressure} hPa</p>
      </div>  
    </div>
  </div>
    `
  }

  showAlert(message,className){

    this.clearAlert();

    const div = document.createElement('div');

    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.alert');

    const search = document.querySelector('.alert-box');

    container.insertBefore(div,search);

    setTimeout(() =>{
      this.clearAlert()
    },2000 )
  }

  clearAlert(){
    const alert = document.querySelector('.alert');

    if(alert){
      alert.remove();
    }
  }


  showTime(time){
    this.time.innerHTML= `
    <h1><i class="far fa-clock"></i> ${time}</h1>
    `
  }

}