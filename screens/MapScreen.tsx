import react from "react";
import { Text, View, StyleSheet } from "react-native";
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiYmVnZGFyOHpvdWhhaXIiLCJhIjoiY2xlenBlcmVhMDFmbDNwcjI4OGN6MmduNyJ9.C8WddE7zeAKKPswFe7AEjA');


export default function MapScreen() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
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


