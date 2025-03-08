import React from 'react';
import { Text, View } from 'react-native';

const Counter = ({ count }) => {
  return (
    <View>
      <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 40 }}>
        {count}
      </Text>
    </View>
  );
};

export default Counter;
