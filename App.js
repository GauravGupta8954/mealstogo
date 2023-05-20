import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState,useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBXXjqP1uE3mkKfLO1ezJXvqKWz1Mhtn-M",
  authDomain: "mealstogo-8cfae.firebaseapp.com",
  projectId: "mealstogo-8cfae",
  storageBucket: "mealstogo-8cfae.appspot.com",
  messagingSenderId: "955819361469",
  appId: "1:955819361469:web:a5060b46316533160923d4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {
  

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>      
        <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}