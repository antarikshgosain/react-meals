import React from "react";
import { useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { getDateTimeMetadata } from "../utils/Utility";

function FavoritesScreen() {
    console.log(getDateTimeMetadata() + "Reached FavoritesScreen");
    const favoriteMealContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealContext.ids.includes(meal.id));
    if(favoriteMeals.length === 0 ) {
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.title}>No Favorite Meal(s) yet</Text>
            </View>
        ); 
    } else {
        return (
            //same as <></>
            <React.Fragment>        

                <Text style={[styles.title, styles.titleContainer]}>Favorite Meal(s)</Text>
                <MealsList items={favoriteMeals}/>
            </React.Fragment> 
            // same as <></>
        );
    }
    
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    titleContainer:{
        paddingTop: 30,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});