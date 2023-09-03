import { View, Text, StyleSheet, Image, Pressable, FlatList, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem( {id, title, imageUrl, duration, complexity, affordability} ) {
    const navigation = useNavigation();
    function selectedMealItemHandler() {
        navigation.navigate('MealDetailsScreen',{
            mealId: id, 
        })
    }
    return (
        <View>
            <Pressable onPress={selectedMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View style={styles.mealItem}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        
                        <Text style={styles.title}> {title} </Text>
                        
                        <MealDetails duration={duration} complexity={complexity} affordability={affordability}></MealDetails>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',

        //shadown for android
        elevation: 4,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible',

        //shadow for iOS
        backgroundColor: 'white',
        shadowColor: '#2d2626',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        margin: 8,
    },

});