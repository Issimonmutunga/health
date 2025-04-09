import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, MapPressEvent } from 'react-native-maps';

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      latitude,
      longitude,
      description: `Location: latitude ${latitude.toFixed(5)}, longitude ${longitude.toFixed(5)}`,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Selected Location"
          />
        )}
      </MapView>

      {selectedLocation && (
        <View style={styles.detailsContainer}>
          <Text style={styles.locationDetails}>{selectedLocation.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  locationDetails: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Location;
