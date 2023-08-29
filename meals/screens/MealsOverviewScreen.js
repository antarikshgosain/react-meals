
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList, } from 'react-native'
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ navigation, route }) {

    const categoryId = route.params.categoryId;
    const categoryColor = route.params.categoryColor;
    const categoryTitle = route.params.categoryTitle;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProp = {
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