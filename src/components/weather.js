import React from 'react';
import { Panel } from 'react-bootstrap';

const Weather = props => (
<div>
    {props.city && props.country &&
        <Panel bsStyle="info">
          <Panel.Heading>
            <p><b>City:</b> {props.city} , <b>Country:</b> {props.country}</p>
          </Panel.Heading>
          <Panel.Body>
            {props.lat && <p>Latitude: {props.lat}</p>}
            {props.lon && <p>Longtitude: {props.lon}</p>}
            {props.temperature && <p>Temperature: {props.temperature} °C</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Description: {props.description}</p>}
          </Panel.Body>
        </Panel>}

    {props.error && <p>Error: {props.error}</p>}
</div>
);
export default Weather;
