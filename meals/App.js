import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();



export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#683216' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#988e88', }}}>
                    <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
                        options={{
                            title: 'All Categories' ,
                        }}
                    />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                    <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
                    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
