import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";
import { Marker,Callout } from "react-native-maps";


import Mapbox from '@rnmapbox/maps';
import { Image, StyleSheet, View } from "react-native";

Mapbox.setAccessToken('pk.eyJ1IjoiendpZ2F0bzEiLCJhIjoiY2xpMm1weHJvMjh1eTNkbnQybHR0aDR3ciJ9.Yhd93iMy0dXIt0DytTv69Q');
Mapbox.setWellKnownTileServer('Mapbox');




const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
     }, [location, viewport]);
    
     console.log(restaurants)

  return (
    <>
      <Search />
      {/* <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map> */}


      
        <Mapbox.MapView style={styles.map} >



        {/* <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[76.77983441525973 ,30.741651959836656 ]}
          /> */}


        {restaurants.map((restaurant) => {
          return (
            <>

            <Mapbox.Camera
            zoomLevel={13}
            centerCoordinate={[ restaurant.geometry.location.lng,restaurant.geometry.location.lat
               ]}
          />
            <Mapbox.MarkerView
                id="pickupLocation"
                coordinate={[restaurant.geometry.location.lng,restaurant.geometry.location.lat]}
                anchor={{ x: 0.5, y: 1 }}
              >
    
                <View style={styles.markerContainer}>
                  <Image
                    source={require('../../../../assets/markerss.png')}
                    style={styles.markerImage2}
                  />
                </View>
              </Mapbox.MarkerView>

              </>

          )})}


        

          </Mapbox.MapView>
     
  
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  },  markerContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerImage2: {
    height: 40,
    width: 40,
  },
});