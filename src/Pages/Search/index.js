import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
 
import api, { Key } from '../../Services/api';

import SearchItem from '../../Components/SearchItem';

import { useNavigation, useRoute } from '@react-navigation/native';

import {
    LoadingContainer,
    Container, 
    ListSearch, 
    Title 
} from './styles';

export default function Search(){
    const [movie, setMovie] = useState('');
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=> {
        let isActive = true;

        async function getSearchMovie(){
            const response = await api.get('/search/movie', {
                params:{
                    query: route?.params?.name,
                    api_key: Key,
                    language: 'pt-BR',
                    page: 1
                }
            });

            if(isActive){
                setMovie(response.data.results);
                setLoading(false);
            }
        }

        if(isActive){
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }
    }, [])

    function navigateDetailsPage(item){
        navigation.navigate('Details', {id: item.id});
    }

    if(loading){
        return(
            <LoadingContainer>
                <ActivityIndicator
                    size={60}
                    color='#fff'
                />
            </LoadingContainer>
        );
    }

    return(
        <Container>
            <ListSearch
               data={movie}
               renderItem={({item}) => 
                    <SearchItem 
                        data={item} 
                        navigatePage={() => navigateDetailsPage(item)}
                    />}
               keyExtractor={(item) => String(item.id)}
               showsVerticalScrollIndicator={false}

            />
        </Container>
    );
}