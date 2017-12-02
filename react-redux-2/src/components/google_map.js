import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}>
        {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
    </GoogleMap>
))

export default MyMapComponent;

