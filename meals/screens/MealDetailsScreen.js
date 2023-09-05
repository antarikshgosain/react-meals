import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from 'react';
import { getDateTimeMetadata, getMessage }  from "../utils/Utility";
import IconButton from "../components/IconButton";

function MealDetailsScreen({route, navigation}) {

    function headerButtonPressHandler() {
        console.log( getDateTimeMetadata()+ "MealDetailsScreen.headerButtonPressHandler() called");
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            }
        }, [navigation, headerButtonPressHandler] );
    });
    
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    return (
        <ScrollView>
        <View style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
            textStyle={styles.detailText}></MealDetails>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <Text style={styles.listedText} key={ingredient}>☆ {ingredient}</Text>
                ))}
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps</Text>
                {selectedMeal.steps.map(step => (
                    <Text style={styles.listedText} key={step}>➢ {step}</Text>
                ))}
            </View>
        </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 2,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 1,
        textAlign: 'center',
        
    },
    subtitleContainer: {
        marginVertical: 12,
        marginHorizontal: 18,
        paddingVertical: 4,
        paddingHorizontal: 12, 
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        backgroundColor: '#d1894e'
    },
    listedText: {
        marginTop: 4,
        color: 'white',
        fontSize: 16
    },
    rootContainer: {
        marginBottom: 60
    }
});