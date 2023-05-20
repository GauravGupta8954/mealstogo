import React ,{useContext}from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text ,Button} from "react-native";
import { SafeArea } from "../../component/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};


const Map = () => (
  <SafeArea>
    <Text style={{padding:20}}>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
  <LocationContextProvider>
    <RestaurantsContextProvider>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Settings" component={SettingsNavigator} options={{headerShown:false}} />
    </Tab.Navigator>
    </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);