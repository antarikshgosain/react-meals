import { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native'
import MealItem from "../components/MealItem";


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

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProp = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return (
            <MealItem {...mealItemProp} />
        )
    }

    return (
        
        <View style={styles.container}>
            
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}>
            </FlatList>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverviewScreen;