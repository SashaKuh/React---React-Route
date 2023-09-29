import axios from 'axios';

const MAIN_DOMEN = 'https://api.themoviedb.org/3'
axios.defaults.baseURL = `${MAIN_DOMEN}`;

export const getAllTrandingMovie = async (page, signal) => {
    const resp = await axios.get('/trending/movie/week', {
      params: {
          language: 'en-US',
            page,
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks'
      },
      signal,
    })
    return resp.data
}

export const getDetailsMovie = async (id, signal, detailsType) => {
  const resp = await axios.get(`/movie/${id}${detailsType}`, {
      params: {
          language: 'en-US',
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks'
    },
      signal
    })
    return resp.data
}

export const getMovieByQuery = async (query, signal) => {
  const resp = await axios.get(`search/movie`, {
      params: {
      language: 'en-US',
      page: 1,
      query,
      },
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks'
    },
    signal
    })
    return resp.data
}