import React from 'react';

import { 
    Container, 
    Banner, 
    Title, 
    ActionContainer, 
    DetailsButton, 
    TextDetailsButton, 
    DeleteButton 
} from './styles';

import { Ionicons } from '@expo/vector-icons';

export default function FavoriteItem({data, deleteMovie, navigatePage}){
    return(
        <Container>
            <Title numberOfLines={1}>{data?.title}</Title>

            {data?.backdrop_path ?
                (<Banner 
                    resizeMethod='resize'
                    source={{ 
                        uri: `https://image.tmdb.org/t/p/original/${data?.backdrop_path}` 
                    }}
                />) :
                (<Banner
                    source={require('../../Image/backdrop.png')}
                />)
            }

            <ActionContainer>
                <DetailsButton onPress={() => navigatePage(data.id)}>
                    <TextDetailsButton>Detalhes</TextDetailsButton>
                </DetailsButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Ionicons
                        name='trash' size={22} color='#fff'
                    />
                </DeleteButton>
            </ActionContainer>

        </Container>
    );
}