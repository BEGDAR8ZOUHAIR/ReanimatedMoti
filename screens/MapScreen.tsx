import react from "react";
import { Text, View, StyleSheet } from "react-native";
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1IjoiYmVnZGFyOHpvdWhhaXIiLCJhIjoiY2xvNHdpeTByMDVvYTJsbXZxMDRyeGl4ZiJ9.EVStFwIsctTv7WeUVeOPww');


export default function MapScreen() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
                <Text>Map</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1,
    },
});


