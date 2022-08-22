import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import Header from '../../Components/Header';
import FavoriteItem from '../../Components/FavoriteItem';

import { getMoviesSave, deleteMovie } from '../../Utils/storage'

import {
    LoadingContainer, 
    Container, 
    ListMovies 
} from './styles';

export default function Movies(){
    const [movies, setMovies] = useState([]);

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovies(){
            const response = await getMoviesSave('@cinemando');

            if(isActive){
                setMovies(response);
            }
            setLoading(false);
        }

        if(isActive){
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }
    }, [isFocused]);

    
    // Deletar favorito
    async function handleDelete(id){
        const result = await deleteMovie(id);
        setMovies(result);
    }

    function navigateDetailsMovie(item){
        navigation.navigate('Details', { id: item.id })
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
            <Header title='Meus filmes'/>
            
            <ListMovies
                data={movies}
                renderItem={({ item }) => 
                    <FavoriteItem 
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetailsMovie(item)}
                    />
                }
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}