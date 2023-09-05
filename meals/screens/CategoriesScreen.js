import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import MealsOverviewScreen from "./MealsOverviewScreen";
import { useLayoutEffect } from 'react';
import IconButton from "../components/IconButton";
import { getDateTimeMetadata, getMessage }  from "../utils/Utility";


function CategoriesScreen({navigation}) {

    function favoritesButtonPressedHandler() {
        console.log( getDateTimeMetadata()+ "CategoriesScreen.favoritesButtonHandler() called");
        navigation.navigate('FavoritesScreen');
    };

    useLayoutEffect( () => {
        navigation.setOptions({
            headerLeft: () => {
                return <IconButton icon="bookmarks-outline" color="white" onPress={favoritesButtonPressedHandler} />
            }
        }, [navigation] );
    });

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', { 
                categoryId: itemData.item.id, 
                categoryTitle: itemData.item.title, 
                categoryColor: itemData.item.color 
            } );
        }
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}>
    
            </CategoryGridTile>
        );
    }

    return (
        <FlatList data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2} 
        >


        </FlatList>
    );
}

export default CategoriesScreen;