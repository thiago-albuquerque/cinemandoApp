import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';

import { StatusBar } from 'react-native';

export default function App(){
  return(
    <NavigationContainer>
        <StatusBar hidden={true}/>
        <Routes/>
    </NavigationContainer>
  );
}