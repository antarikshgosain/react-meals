import { View, Text } from "react-native";

function MealDetailsScreen({route}) {
    
    const mealTitle = route.params.mealTitle;
    
    return (
        <View>
            <Text>Meal: {mealTitle}</Text>
        </View>
    );
}

export default MealDetailsScreen;