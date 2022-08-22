import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import api, { Key } from '../../Services/api';

import { getMoviesSave, saveMovie, hasMovie, deleteMovie } from '../../Utils/storage';

import Genres from '../../Components/Genres';

import {
    LoadingContainer,
    Container,
    Header,
    HeaderButton,
    Banner,
    Title,
    RateContainer,
    Rate,
    ListOfGenres,
    Info,
    Description,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);

    const [favorite, setFavorite] =useState(false);

    const [loading, setLoading] =useState(true);

    useEffect(() => {
        let isActive = true;

        async function getMovie(){
            const response = await api.get(
                `/movie/${route.params?.id}?api_key=${Key}&language=pt-BR`
            )
            .catch((err) => {
                console.log(err);
            })

            if(isActive){
                setMovie(response.data);
                
                const isFavorite = await hasMovie(response.data);

                setFavorite(isFavorite);
            }
            setLoading(false);
        }
        if(isActive){
            getMovie();
        }

        return () => {
            isActive = false;
        }
    }, [])

    async function handleFavoriteMovie(movie){
        if(favorite){
            await deleteMovie(movie.id);
            setFavorite(false);
            alert('Filme removido da sua lista!');
        }else{
            await saveMovie('@cinemando', movie)
            setFavorite(true);
        }

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
            <Header>
                <HeaderButton onPress={() => navigation.goBack()}>
                    <Feather
                        name='arrow-left' size={28} color='#fff'
                    />
                </HeaderButton>

                <HeaderButton onPress={() => handleFavoriteMovie(movie)}>
                    {favorite ? 
                        (<Ionicons
                            name='bookmark' size={28} color='#fff'
                        />) :
                        (<Ionicons
                            name='bookmark-outline' size={28} color='#fff'
                        />)
                    }
                </HeaderButton>
            </Header>

            <Banner
                source={{ 
                    uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` 
                }}
                resizeMethod='resize'
            />

            <Title numberOfLines={2}>{ movie.title }</Title>
            <RateContainer>
                <Stars
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}
                    fullStar={<Ionicons name='md-star' size={24} color='#e7a74e'/>}
                    emptyStar={<Ionicons name='md-star-outline' size={24} color='#e7a74e'/>}
                    halfStar={<Ionicons name='md-star-half' size={24} color='#e7a74e'/>}
                    disable={true}
                />
                <Rate>{movie.vote_average} / 10</Rate>
            </RateContainer>

            <ListOfGenres
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Genres data={item}/>}
            />

            <Info>Descrição</Info>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Description>{movie?.overview}</Description>
            </ScrollView>
        </Container>
    );
}

