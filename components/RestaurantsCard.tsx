import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  name: string
};

const RestaurantCards: React.FC<Props> = ({name}) => {
  return (
    <View style={{backgroundColor: '#fefefe'}}>
      <Text>{name}</Text>
    </View>
  );
};

export default RestaurantCards;
