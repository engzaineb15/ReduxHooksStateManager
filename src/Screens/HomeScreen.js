import React, { useState ,createContext} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CountScreen from '../Component/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Redux/CounterSlice';

const HomeScreen = ({ navigation }) => {

const dispatch = useDispatch();

  return (
    <View style={styles.container}>
    <CountScreen />
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {
        dispatch(increment());
      }}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        dispatch(decrement());
      }}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#6200ea', 
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
