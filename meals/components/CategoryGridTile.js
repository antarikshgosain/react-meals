import { Text, Pressable, View, StyleSheet } from "react-native";

function CategoryGridTile({title, color}) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
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
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'   
    }
});

export default CategoryGridTile;