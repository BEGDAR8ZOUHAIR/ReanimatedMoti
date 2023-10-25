import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
Mapbox.setAccessToken('sk.eyJ1IjoiYmVnZGFyOHpvdWhhaXIiLCJhIjoiY2xvNHdpeTByMDVvYTJsbXZxMDRyeGl4ZiJ9.EVStFwIsctTv7WeUVeOPww');

export default function MapScreen() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
        })();
    }, []);
    return (
        <View style={styles.container}>
            {location && (
                <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
                    <Mapbox.Camera
                        zoomLevel={15}
                        centerCoordinate={[location.longitude, location.latitude]}
                        animationMode="flyTo"
                        animationDuration={2000}
                    />

                    <Mapbox.PointAnnotation
                        id="userLocation"
                        coordinate={[location.longitude, location.latitude]}
                        title="Your location"
                    />
                </Mapbox.MapView>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },

    map: {
        flex: 1,
    },
});


