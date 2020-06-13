import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Oswald_400Regular, useFonts} from '@expo-google-fonts/oswald';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import colors from './src/constants/colors';

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  useEffect(()=>{
    (async ()=>{
      await SplashScreen.preventAutoHideAsync();

      if(fontsLoaded ){
        await SplashScreen.hideAsync();
      }
    })();

   
  },[fontsLoaded])

  if(!fontsLoaded){
    return <></>
  }

  return (
    <>
    <StatusBar  barStyle="dark-content" backgroundColor={colors.tintColor}  />
    <Routes/>
    </>
  );
}
