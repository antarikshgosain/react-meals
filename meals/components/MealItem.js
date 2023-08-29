import { View, Text, StyleSheet, Image, Pressable, FlatList, Platform } from 'react-native'

function MealItem( {title, imageUrl, duration, complexity, affordability} ) {
    return (
        <View>
            <Pressable>
                <View style={styles.innerContainer}>
                    <View style={styles.mealItem}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        
                        <Text style={styles.title}> {title} </Text>
                        <View style={styles.details}>
                            <Text style={styles.detailItem} > {duration} minutes</Text>
                            <Text style={styles.detailItem} > {complexity.toUpperCase()} </Text>
                            <Text style={styles.detailItem} > {affordability.toUpperCase()} </Text>
                        </View>
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
        fonctSize: 20,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 16
    }
});