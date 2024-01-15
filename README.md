
# Weather Forecasy


# System Features Overview

## Address Selection

- Ability to choose and input a specific address in the United States.
- Utilize a service like the US Census Geocoding API to convert addresses into geographical coordinates (latitude and longitude).

## Geocoding Integration

- Integration with geocoding services for accurate location mapping.
- Use geospatial data to pinpoint the selected address on a map.

## Weather Forecast

- Real-time integration with a weather API (e.g., US National Weather Service API) to fetch up-to-date weather information.
- Retrieve data such as temperature, wind speed, and conditions for the chosen location.

## 7-Day Forecast

- Display a 7-day weather forecast starting from the current day.
- Provide detailed information for each day, including temperature highs and lows, precipitation probability, and wind conditions.

## User-Friendly Interface

- Intuitive and user-friendly interface for inputting addresses and navigating through weather details.
- Clear and visually appealing presentation of weather information.

## Responsive Design

- Ensure the system's design is responsive to different devices (desktop, tablet, mobile) for a seamless user experience.

## CORS Handling

- Implement Cross-Origin Resource Sharing (CORS) handling to allow the front-end application to make requests to the weather API without encountering security restrictions.

## Timezone Consideration

- Take into account the timezone of the selected location to accurately display forecast data for the user's local time.

## Error Handling

- Implement proper error handling mechanisms for scenarios such as invalid addresses, API request failures, or unavailable weather data.

## Tech

What did I use?

- [.NetCore](https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/install) - Backend!
- [ReactJs](https://reactjs.org/) - Frontend
- [Sql Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) - Banco de dados
- [Material Ui](https://mui.com/pt/) - Ui Components.
- [Axios](https://github.com/axios/axios) - Http requests
- [Swagger](https://swagger.io/) - Api Docs

## How to install?

### Clone Repository
Only clone the repository normally via GitHub, or as a .zip file.

### Install front dependencies
-Go to te path **\front**.
-Run
```sh
npm install 
```
or

```sh
yarn install 
```
-Now! Wait for the packages to be installed.

## Execute aplication
### Execute Api
Just set the **Nivello.Api** project as main, and run using IIS. After executing, the Swagger screen will appear containing the API documentation, as in the image:

![strong text](https://github.com/osnjunior91/forecast-weather/blob/main/GitImages/swagger.png?raw=true)

### Execute Web Site
-Go to **/front/src/services/axios/index.js** and change the api address.
-Run

```sh
npm start
```
or

```sh
yarn start
```

## How use aplication
### Home Page
  

![HomeEmpty.png](https://github.com/osnjunior91/forecast-weather/blob/main/GitImages/HomeEmpty.png?raw=true)

##### Here you will:
* Click on **Click here to select address**.
* Fill in address info on this modal form.