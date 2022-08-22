import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { 
    Container,
    BannerItem,
    Tilte,
    RateContainer,
    Rate,
} from './styles';

export default function SliderItem({ data, navigatePage }){
    return(
        <Container onPress={() => navigatePage(data)}>
            <BannerItem
                source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
                resizeMethod='resize'
            />

            <Tilte numberOfLines={1}> {data.title} </Tilte>

            <RateContainer>
                <Ionicons
                    name='md-star' size={12} color='#e7a74e'
                />
                <Rate> {data.vote_average} / 10 </Rate>
            </RateContainer>
        </Container>
    );
}