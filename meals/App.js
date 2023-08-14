import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar bar-style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} />
        </Stack.Navigator>

        {/* Note needed here because component is provided in Stack.screen */}
        {/* <CategoriesScreen/> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
