import React, { useState, useEffect } from 'react';

import api, { Key } from '../../Services/api';

import { ScrollView, ActivityIndicator, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header';
import SliderItem from '../../Components/SliderItem';

import { Feather } from '@expo/vector-icons';

import {
    LoadingContainer,
    Container,
    SearchContainer,
    SliderMovie,
    Input,
    SearchButton,
    Title,
    BannerButton,
    Banner,
    TitleBanner,
} from './styles';

export default function Home(){
    const [nowMovies, setNowMovies] = useState([]);
    const [bannerMovie, setBannerMovie] = useState({});
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const [input, setInput] = useState('');

    useEffect(() => {
        let isActive = true;
        const abortControler = new AbortController();

        async function getMovies(){
            const [nowData, popularData, topData] = await Promise.all([
                api.get(`/movie/now_playing?api_key=${Key}&language=pt-BR&page=1`),
                api.get(`/movie/popular?api_key=${Key}&language=pt-BR&page=1`),
                api.get(`/movie/top_rated?api_key=${Key}&language=pt-BR&page=1`),
            ]);

            if(isActive){
                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
                setNowMovies(nowData.data.results);
                setPopularMovies(popularData.data.results);
                setTopMovies(topData.data.results);
            }
            setLoading(false);
        }
        getMovies();

        return () => {
            isActive = false;
            abortControler.abort();
        }
    }, [])

    function randomBanner(movies){
        return Math.floor(Math.random() * movies.length);
    }
    
    function navigateDetailsPage(item){
        navigation.navigate('Details', {id: item.id});
    }

    function handleSearchMovie(){
        if(input === ''){
            alert('Preencha com algum nome!');
            return;
        }
        navigation.navigate('Search', {name: input});
        setInput('');
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
            <Header title='Cinemando'/>

            <SearchContainer>
               <Input 
                    placeholder='Digite o filme que você procura'
                    value={input}
                    onChangeText={(value) => setInput(value)}
                    placeholderTextColor='#ddd'                    
               />
               <SearchButton onPress={handleSearchMovie}>
                    <Feather
                        name='search' size={28} color='#fff'
                    />
               </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton onPress={() => navigateDetailsPage(bannerMovie)}>
                    <Banner 
                        source={{uri: `https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`}}
                        resizeMethod='resize'
                    />
                    <TitleBanner numberOfLines={2}>{ bannerMovie.title }</TitleBanner>
                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    data={nowMovies}
                    renderItem={
                        ({ item }) => 
                            <SliderItem 
                                data={item} 
                                navigatePage={() => navigateDetailsPage(item)}
                             />
                    }
                    keyExtractor={( item ) => String(item.id)}
                    showsHorizontalScrollIndicator={false}
                />

                <Title>Populares</Title>
                
                <SliderMovie
                    horizontal={true}
                    data={popularMovies}
                    renderItem={
                        ({ item }) => 
                            <SliderItem 
                                data={item} 
                                navigatePage={() => navigateDetailsPage(item)}
                             />
                    }
                    keyExtractor={( item ) => String(item.id)}
                    showsHorizontalScrollIndicator={false}
                />

                <Title>Mais votados</Title>

                <SliderMovie
                    horizontal={true}
                    data={topMovies}
                    renderItem={
                        ({ item }) => 
                            <SliderItem 
                                data={item} 
                                navigatePage={() => navigateDetailsPage(item)}
                             />
                    }
                    keyExtractor={( item ) => String(item.id)}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </Container>
    );
}