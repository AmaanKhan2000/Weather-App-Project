// Init Weather.JS

const weather = new Weather()
const time = new Time()
const ui = new UI();

// Values
const search = document.querySelector('.btn1');


search.addEventListener('click', function(e){
  const cityValue = document.getElementById('cityValue').value;
  const countryValue = document.getElementById('countryValue').value;

  if(cityValue !== '' && countryValue !== ''){
    weather.getWeather(cityValue,countryValue)
    .then(results => {
      results.weather.forEach((current) => {
        outputWeather = current.description;
        outputIcon = current.icon;
      })
      ui.showWeather(results,outputWeather, outputIcon)
    })
    .catch(err => {
      ui.showAlert('Please Enter a valid city/country','alert alert-danger');
    })
  }else{
    
  }
  if(cityValue !== '' && countryValue !== ''){
    time.getTime(cityValue,countryValue)
    .then(timeResults => {
      var hours = (timeResults.datetime).slice(11,13);
      var AmOrPm = hours >= 12 ? 'pm' : 'am';
      hours = (hours % 12) || 12;
      var minutes = (timeResults.datetime).slice(14,16);
      var finalTime = hours + ":" + minutes + " " + AmOrPm; 

      ui.showTime(finalTime)
    })
  }
  e.preventDefault()
});
