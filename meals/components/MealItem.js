import { View, Text, StyleSheet, FlatList, } from 'react-native'

function MealItem( {title} ) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MealItem;