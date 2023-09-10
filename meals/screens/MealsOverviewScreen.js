import { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native'
import MealItem from "../components/MealItem";
import MealsList from "../components/MealList/MealsList";


function MealsOverviewScreen({ navigation, route }) {

    const categoryId = route.params.categoryId;
    const categoryColor = route.params.categoryColor;
    const categoryTitle = route.params.categoryTitle;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    //const categoryTitle = CATEGORIES.find((category) => category.id == catId);
    useLayoutEffect( () => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation])

    return (
        <MealsList items={displayedMeals} />
    );
}


export default MealsOverviewScreen;