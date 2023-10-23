import react from "react";
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from "./App/components/index";

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Nav"
                        component={Tabs}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});


