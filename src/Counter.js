import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../App';

const Counter = ({  }) => {

    const count = useContext(AppContext);
  console.log('countContextValue', count);


  return (
    <View>
      <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 40 }}>
        {count}
      </Text>
    </View>
  );
};

export default Counter;
