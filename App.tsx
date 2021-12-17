import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import ExploreScreen from './screens/Explore';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Restaurants App</Text>
      </View>
      <View style={styles.container}>
        <ExploreScreen/>
      </View>
    </SafeAreaView>
  );
};

export default App;

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});
