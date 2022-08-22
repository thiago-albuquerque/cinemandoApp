import React from 'react';

import { 
    Container, 
    Banner, 
    Title 
} from'./styles';

export default function SearchItem({ data, navigatePage }){
    function DetailsMovie(){
        if(data.release_date === ''){
            alert('Este filme ainda não foi lançado!');
            return;
        }
        navigatePage(data);
    }

    return(
        <Container onPress={DetailsMovie}>

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

            <Title>{data?.title}</Title>
        </Container>
    );
}