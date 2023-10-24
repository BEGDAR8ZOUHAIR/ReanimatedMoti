import react from "react";
import { Text, View, StyleSheet } from "react-native";


export default function Home() {
    return (
        <View style ={styles.container}>
            <Text style= {styles.text}
            >Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor:  '#c56b14'
        
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center'
    }
});
