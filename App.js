 
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
import DetailsModal from './screens/DetailsModal';
import { createStackNavigator } from '@react-navigation/stack';
import Counter from './components/Counter';
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Counter"
        component={Counter}
        // options={({ route }) => ({ title: route.params.paletteName })}
      />
      <MainStack.Screen
        name="DetailsModal"
        component={DetailsModal}
        // options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};
const App = () => {
  return (
  <NavigationContainer >
     <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
      <RootStack.Screen
          name="DetailsModal"
          component={DetailsModal}
          options={{ headerShown: false }}
        />
      
    </NavigationContainer>
   
  
  );
};


export default App;
