import { Text, Pressable, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[styles.gridItem, ]}>
            <Pressable android_ripple={{color: '#ccc'}}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null] } 
                onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,

        //shadown for android
        elevation: 4,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible',

        //shadow for iOS
        backgroundColor: 'white',
        shadowColor: '#2d2626',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'   
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default CategoryGridTile;