
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet} from 'react-native'


function MealsOverviewScreen({ navigation, route }){

    const categoryId = route.params.categoryId;
    const categoryColor = route.params.categoryColor;
    const categoryTitle = route.params.categoryTitle;

    return (
        <View style={styles.container}>
            <Text>{categoryId}</Text>
            <Text>{categoryTitle}</Text>
            <Text>{categoryColor}</Text>
            <Text>{categoryColor}</Text>
            <Text>{categoryColor}</Text>
            
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