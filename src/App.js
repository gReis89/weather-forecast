import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import logo from './assets/imgs/sun.svg'
import './App.css'
import 'bulma/css/bulma.min.css'
import WeatherForecast from './components/WeatherForecast'
import * as weatherActions from './services/weather/weather-forecast.actions'
import SpinnerLoader from './components/SpinnerLoader'

class App extends Component {
  componentDidMount () {
    this.props.actions.fetchWeatherForecast()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <div className='container'>
          <WeatherForecast forecast={this.props.forecast} />
        </div>
        <footer>
          <h5>
            with <span className="heart"></span> by &nbsp;
            <a href="https://www.linkedin.com/in/guilhermerodrigues/"
              target="_blank" rel="noopener noreferrer">Guilherme Rodrigues</a>
            &nbsp; for Wipro
          </h5>
        </footer>
        <SpinnerLoader isLoading={this.props.loading} />
      </div>
    )
  }
}

App.propTypes = {
  forecast: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired
}

/**
 * Fetch component with Redux store data
 */
const mapStateToProps = (state, ownProps) => {
  return {
    forecast: state.forecast,
    loading: state.loading
  }
}

/**
 * map our redux actions to our component
 */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...weatherActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
