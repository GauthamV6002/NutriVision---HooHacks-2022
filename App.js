import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/Home.jsx"
import ImageDataScreen from "./screens/ImageData.jsx"
import CameraScreen from "./screens/ImageCapture.jsx"
import StatsScreen from "./screens/Stats.jsx"

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Take Image" component={ImageDataScreen} />
        <Stack.Screen name="Statistics" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
