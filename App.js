 
import React from 'react'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import { 
  Text, 
  View,
  StyleSheet,
} from 'react-native'; 
import Home from './screens/Home';
import Details from './screens/Details';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
   
  return (
    <NavigationContainer >
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
    </NavigationContainer>
  
  );
};


export default App;
