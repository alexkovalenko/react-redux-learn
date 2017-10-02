import React from 'react';
import Chart from './chart';
import GoogleMap from './google_map';

export default ({city, list}) => {
    const temps = list.map(weather => weather.main.temp);
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);
    return (
        <tr>
            <td><GoogleMap lat={city.coord.lat} lon={city.coord.lon}/></td>
            <td><Chart data={temps} color='red' units="K"/></td>
            <td><Chart data={pressures} color='green' units="hPa"/></td>
            <td><Chart data={humidities} color='blue' units="%"/></td>
        </tr>
    )
};