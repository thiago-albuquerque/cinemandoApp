import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Movies from '../Pages/Movies';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#2E434E',
                    padding: 10
                },
                drawerActiveBackgroundColor: '#F9A101',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff'
            }}
        >
            <Drawer.Screen 
                name='HomeDrawer' 
                component={StackRoutes}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'movie-open' : 'movie-outline'} 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen 
                name='Movies' 
                component={Movies}
                options={{
                    title: 'Meus Favoritos',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'heart-multiple' : 'heart-multiple-outline'} 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}