import React, { Component } from 'react'
import {compose, withProps} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#192da3"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

          // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.9439806623163!2d-6.267666684259954!3d53.34425897997858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9d3c764267%3A0xfc98a5bb97b6a481!2sThe+Underground+Venue!5e0!3m2!1sen!2sie!4v1512926059423" width="600" height="450" frameborder="0" allowfullscreen></iframe>
const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDgqyBo1ZCAq7FISmeA2vwUwBgiRcYrVaI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px`, position: `absolute`, bottom: `0`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap)
((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 53.344259, lng:-6.2676667 }}
    defaultOptions={{styles: mapStyles}}
  >
    <Marker position={{ lat: 53.344259, lng:-6.2676667 }}
    icon="TheScratchProfiler.png"
     />
  </GoogleMap>
);


// export default CSSModules(Map, styles, {allowMultiple: true} )
export default Map;
