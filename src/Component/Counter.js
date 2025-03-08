// Counter.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// import Redux Hooks to use redux state and dispatch actions

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);



  return (
    <View>
      <Text style={{ fontSize: 40 ,marginBottom:30}}>{count}</Text>
    </View>
  );
};

export default Counter;
