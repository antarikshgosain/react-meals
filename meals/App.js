import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor = "#b3e6ff"  bar-style='auto' />
      <NavigationContainer>
        <CategoriesScreen/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
