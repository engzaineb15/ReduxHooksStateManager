import React, { useState ,createContext} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Counter from './src/Counter'; 


export  const AppContext = createContext(0);

const App = () => {
  //first we use local state to store the count value (useState)
  const [count, setCount] = useState(0);
  // how it works in background

  const handleIncrement = () => {setCount(prevState => prevState + 1);};
  const handleDecrement = () => {
    if (count == 0) return false;
    setCount(prevState => prevState -1)
    ;};




    // Second way  use global state (Context API)

  




  return (
    <AppContext.Provider value={count}>
    <View style={styles.container}>
      <Counter />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleIncrement()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDecrement()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
    </AppContext.Provider>
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
