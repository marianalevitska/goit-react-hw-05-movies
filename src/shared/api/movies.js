import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '03d4c920be425f763881cb7707c96958',
    }
});

export const getPopularMovies = async () => {
    const { data } = await instance.get('/trending/movie/week');
    return data;
};

export const searchMovies = async (query,page=1 ) => {
    const { data } = await instance.get('/search/movie', {
        params: {
            language: 'en-US',
            include_adult: false,
            page,
            query,
        },
    });
    return data;
};

//https://api.themoviedb.org/3/movie/725201?api_key=03d4c920be425f763881cb7707c96958&language=en-US
//https://api.themoviedb.org/3/movie/725201?api_key=03d4c920be425f763881cb7707c96958&language=en-US
export const getMovieDetails = async (id) => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
}

export const getMovieCredits = async id => {
   const { data } = await instance.get(`/movie/${id}/credits`);
    return data;
}

export const getMovieReviews = async id => {
   const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
}