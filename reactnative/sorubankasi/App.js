import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Signup from './src/Signup'; // Signup dosya yolunu güncelle
import SoruBank from './src';
import Playground from './src/playground';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="sorubank" component={SoruBank} />
        <Stack.Screen name="playground" component={Playground} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
