import Reat from'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Search from '../Pages/Search';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Details'
                component={Details}
                options={{
                    headerShown: false,
                    title: 'Detalhes'
                }}
            />

            <Stack.Screen
                name='Search'
                component={Search}
                options={{
                    title: 'Resultados',
                    headerTintColor: '#f9a101',
                    headerTitleStyle:{
                        color: '#f9a101'
                    },
                    headerStyle:{
                        backgroundColor: '#2E434E'
                    }
                }}
            />
        </Stack.Navigator>
    );
}