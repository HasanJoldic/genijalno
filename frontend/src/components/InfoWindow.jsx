import React from "react";

const InfoWindow = props => {
  const { 
    name, lat, lng, 
    property_1, 
    property_2, 
    property_3, 
    property_4 
  } = props.selectedMarker || {};
  return (
    <div style={{padding:"50px", border:"1px solid #000", borderRadius:"10px", minWidth:"400px"}}>
      <div>Name: {name}</div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {lng}</div>
      <div>property_1: {property_1}</div>
      <div>property_2: {property_2}</div>
      <div>property_3: {property_3}</div>
      <div>property_4: {property_4}</div>
    </div>
  );
};

export default InfoWindow;