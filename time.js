class Time {
  async getTime(cityValue, countryValue){
    const resTime = await fetch(`https://timezone.abstractapi.com/v1/current_time?api_key=6b87d294f8d64d5fb9780525076c94b9&location=${cityValue}, ${countryValue}`);

    const response = await resTime.json();

    return response; 
  }
}