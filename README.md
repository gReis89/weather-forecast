This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions

- `npm install` install dependencies
- `npm start` to run the project locally
- `npm test` to run unit Tests
- `npm run build` this command will build the project into the /build folder, ready for production
- this project has been deployed into a Heroku instance and can be accessed [here](https://gr-weather-forecast.herokuapp.com/)

## Improvements

- Improve UI and UX
- Improve code coverage
- Add more weather information(pressure, humidity, wind)
- Allow users to choose the city to be forecasted
- Error handling

## Developer Notes

For some reason, the API is returning 4 to 6 days depending on the users time, I couldn't find any parameter on the documentation page to fix this up.

`create-react-app` makes very simple to configure a dev React environment, we don't need to concern about installing and configuring Webpack, Babel, Test frameworks, deploy scripts or any stuff related to that. `create-react-app` scaffold all the complexity and let we concern only about the app code, giving us a way lighter and organized folder structure. Although, if needed `npm run eject` can be used to remove the project under the framework scaffold and put it in an usual webpack/babel setup.

for more info of how it works, please refer to this [article](https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc)
