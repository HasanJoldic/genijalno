import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import ToggleButton from "react-toggle-button";

const Map = withScriptjs(withGoogleMap((props) => {

  const generateMarkers = () => {
    return props.markers.map((marker, index) => 
      <Marker 
        key={"Marker_key_" + index} 
        position={{ lat: marker.lat, lng: marker.lng }} 
        onClick={() => props.onClickMarker(index)}
      />
    );
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        {props.shouldShowMarkers && generateMarkers()}
      </GoogleMap>
      <div style={{marginTop:"20px"}}>
        <ToggleButton
          value={props.shouldShowMarkers}
          onToggle={() => props.onToggleShowMarkers()}
        /> Show markers
      </div>
    </div>
    );
  }
));

export default Map;
