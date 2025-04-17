import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, MapPressEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { requestLocationPermission } from './PermissionsAndroid';

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
    description: string;
  } | null>(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

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
        provider={PROVIDER_GOOGLE} // 👈 Ensures Google Maps is used🤞
        style={styles.map}
        initialRegion={{
          latitude: -1.2088,
          longitude: 36.8601,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }} onPress={handleMapPress}
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
