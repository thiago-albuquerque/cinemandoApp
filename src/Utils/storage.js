import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

// Salvar um novo filme
export async function saveMovie(key,  newMovie){
    let moviesStored = await getMoviesSave(key);

    // Conferindo se já existe um filme salvo como mesmo id
    const hasMovie = moviesStored.some(item => item.id === newMovie.id)

    if(hasMovie){
        alert('Este filme já está salvo!');
        return;
    }
    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    alert('Salvo!');
}


// Deletar um filme
export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@cinemando');

    let myMovies = moviesStored.filter(item => {
        return (item.id !== id);
    })

    await AsyncStorage.setItem('@cinemando', JSON.stringify(myMovies));
    return myMovies;
}


// Filtrar filme que já está salvo
export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@cinemando');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if(hasMovie){
        return true;
    }

    return false;
}