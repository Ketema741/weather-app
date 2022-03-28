"use strict";

console.log('Client side javascript file is loaded!');
var weatherForm = document.querySelector('form');
var search = document.querySelector('input');
var messageOne = document.querySelector('#message-1');
var messageTwo = document.querySelector('#message-2');
var messageThree = document.querySelector('#message-3');
var weather_icon = document.getElementById('weathear__icon');
weatherForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var location = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  fetch('http://localhost:3000/weather?address=' + location).then(function (response) {
    response.json().then(function (data) {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        weather_icon.setAttribute('src', data.weather_icon);
        messageOne.textContent = data.weather_description + ', ' + data.weather_temprature + ' ℃';
        messageTwo.textContent = 'perciptation: ' + data.perciptation + ' MM';
        messageThree.textContent = data.location + ' lat: ' + data.latitude + ', long: ' + data.longitude;
      }
    });
  });
});