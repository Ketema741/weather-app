"use strict";

var request = require('request');

var forecast = function forecast(latitude, longitude, callback) {
  var latLong = latitude + ',' + longitude; // const url = 'http://api.weatherstack.com/current?access_key=b3f585e8d85b3fc12371629c1cafa0f3/&query=' + location1

  var url = 'http://api.weatherstack.com/current?access_key=a001532f91e4db2af4ff8a3576f1aadd&query=' + latLong;
  request({
    url: url,
    json: true
  }, function (error, _ref) {
    var body = _ref.body;

    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        temp: body.current.temperature,
        weather_descriptions: body.current.weather_descriptions[0],
        weather_icon: body.current.weather_icons[0],
        perciptation: body.current.precip
      });
    }
  });
};

module.exports = forecast; // we can make http request using http / s, request, needle, axios and others.
// we can make http request using http / s, request, needle, axios and others.