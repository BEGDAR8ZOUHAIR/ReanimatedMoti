
import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
   container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {

    justifyContent: 'center',
    textAlign: 'center',
  }
})