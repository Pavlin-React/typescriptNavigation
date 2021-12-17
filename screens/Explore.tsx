import React from 'react';
import {View, Text} from 'react-native';
import RestaurantCards from '../components/RestaurantsCard';

const ExploreScreen = () => {
  return (
    <View>
      <View>
        <Text>Restaurants near oyu</Text>
        <RestaurantCards name="Sushi Restaurant" />
        <RestaurantCards name="Burger Restaurant" />
        <RestaurantCards name="Find dining Restaurant" />

        <Text>Most Popular Restaurants</Text>
        <RestaurantCards name="Sushi Restaurant" />
        <RestaurantCards name="Burger Restaurant" />
      </View>
    </View>
  );
};

export default ExploreScreen;
