import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor = "#b3e6ff"   bar-style='auto' />
      <CategoriesScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
