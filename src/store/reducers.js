import reduceReducers from 'reduce-reducers'
import weatherReducer from '../services/weather/weather-forecast.reducer'

// combine reducers to have a single state
const rootReducer = reduceReducers(
  weatherReducer
)

export default rootReducer
