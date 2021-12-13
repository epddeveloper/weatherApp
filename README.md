##Weather APP
App display weather form chosen cities.
The list of the cities is configured in config.json file and can be changed if you want.
Sample config file is:
```json
{
  "apiBaseUrl": "https://api.openweathermap.org/data/2.5/",
  "apiCurrentWeatherUrlPart": "weather?",
  "apiWeatherForecastUrlPart": "onecall?",
  "apiKey": "4a990db983673f572783071869994b99",
  "cities": [
    {
      "name": "London",
      "lat": 51.5085,
      "lon": -0.1257
    }
  ]
}
```

* `apiBaseUrl` - url address to open weather api. Not change.
* `apiCurrentWeatherUrlPart` - the part of url after `apiBaseUrl` necessary to get current weather. Not change.
* `apiWeatherForecastUrlPart` - the part of url after `apiBaseUrl` necessary to get weather forecast. Not change.
* `apiKey` - unique API key
* `cities` - list of cities

##### City
* `name` - name of the city
* `lat` - latitude of the city
* `lon` - longitude of the city

##UI
on the view there is visible a list of chosen cities form config file. 
After clicking on one of items will be displayed the list of for weather forecast for clicked city (48h).



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

