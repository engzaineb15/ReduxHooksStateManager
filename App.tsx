import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Counter from './src/Counter'; 

const App = () => {
  //first we use local state to store the count value (useState)
  const [count, setCount] = useState(0);
  // how it works in background
  console.log('count', count);

  const handleIncrement = () => {setCount(prevState => prevState + 1);};
  const handleDecrement = () => {
    if (count == 0) return false;
    setCount(prevState => prevState -1)
    ;};


    



  return (
    <View style={styles.container}>
      <Counter count={count} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleIncrement()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDecrement()}>
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

export default App;
