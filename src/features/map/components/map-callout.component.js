import React from "react";
import { CompactRestaurantInfo } from "../../../component/restaurant/compact-restaurant-info.component";


export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo restaurant={restaurant} isMap/>
);