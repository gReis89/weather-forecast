import * as api from './api'
/** ********************
 * Export action types *
 ***********************/

export const REQUEST = 'REQUEST'
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

/** ********
 * Actions *
 ***********/

 export const request = () => {
   return { type: REQUEST }
 }

 export const receiveForecast = (data) => {
   return { type: RECEIVE_FORECAST, data }
 }

/**
 * fetch weather forcast data
  */
 export const fetchWeatherForecast = () => {
   return dispatch => {
     dispatch(request())
     return api.getForecast('Edinburgh')
       .then(data => {
         dispatch(receiveForecast(data))
       })
       // .catch((error) => dispatch(handleSystemError(error))) TODO
   }
 }
