import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import { loadMarkers, selectMarker, toggleShowMarkers } from "../reducers/app/actions";

import Map from "../components/Map";
import InfoWindow from "../components/InfoWindow";

class App extends Component {

  constructor(props) {
    super(props);
    props.loadMarkers();
  }

  handleClickMarker(index) {
    const markerToSelect = this.props.markers[index];
    const { selectedMarker } = this.props;
    if (selectedMarker && markerToSelect.lat === selectedMarker.lat && markerToSelect.lng === selectedMarker.lng) {
      this.props.selectMarker(null);
    } else {
      this.props.selectMarker(index);
    }
  }

  handleToggleShowMarkers() {
    this.props.toggleShowMarkers();
  }

  render() {
    return (
      <div>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
          <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "600px", width: "600px", display:"inline-block", marginRight:"200px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markers={this.props.markers}
            onClickMarker={this.handleClickMarker.bind(this)}
            shouldShowMarkers={this.props.shouldShowMarkers}
            onToggleShowMarkers={this.handleToggleShowMarkers.bind(this)}
          />
          {this.props.selectedMarker && <InfoWindow selectedMarker={this.props.selectedMarker} />}
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  markers: state.app.markers,
  selectedMarker: state.app.selectedMarker,
  shouldShowMarkers: state.app.shouldShowMarkers
});

export default connect(mapStateToProps, { 
  loadMarkers, selectMarker, toggleShowMarkers 
})(App);
