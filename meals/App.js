import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#683216'},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: '#988e88'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: 'All Categories',
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   }
          // }}
          />
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
