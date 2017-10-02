import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherListItem from '../components/weather_list_item';

class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeatherList() {
        if (!this.props.weatherList) {
            return;
        }
        return this.props.weatherList.map(this.renderCity);
    }

    renderCity({city, list}) {
        return (<WeatherListItem key={city.id} city={city} list={list}/>);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.renderWeatherList()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weatherList: state.weather}
}

export default connect(mapStateToProps)(WeatherList)