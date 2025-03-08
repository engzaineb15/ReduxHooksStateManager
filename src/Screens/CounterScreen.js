import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CounterScreen = () => {
    const count = useSelector((state) => state.counter.value);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{ fontSize: 40 ,marginBottom:30}}>CounterScreen : {count}</Text>
    </View>
  )
}

export default CounterScreen