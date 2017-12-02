import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import MapWithAMarker from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        if (!cityData) {
            return (<div>Not Found</div>);
        }
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (weather.main.temp - 273));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td><MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4pfZRhFQn2BSri6LSsyKrz8tmjajwVWU&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `200px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    latitude={cityData.city.coord.lat}
                    longitude={cityData.city.coord.lon}
                    zoom={7}

                /></td>
                <td><Chart data={temps} color="orange" units="Celcius" /></td>
                <td><Chart data={pressures} color="blue" units="hpa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Celcius)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);