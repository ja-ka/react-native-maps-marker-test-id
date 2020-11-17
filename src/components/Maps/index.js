import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const locations = [
  {
    latitude: 49.2988199,
    longitude: 8.6490136,
  },
  {
    latitude: 49.293936,
    longitude: 8.674228,
  },
];

const Maps = () => (
  <MapView
    style={{flex: 1}}
    initialRegion={{
      latitude: 51.58453765908476,
      latitudeDelta: 12.60450692544972,
      longitude: 10.199171528220177,
      longitudeDelta: 10.48278160393238,
    }}>
    {locations.map((l, i) => (
      <Marker key={i} coordinate={l} testID="marker" />
    ))}
  </MapView>
);

export default Maps;
