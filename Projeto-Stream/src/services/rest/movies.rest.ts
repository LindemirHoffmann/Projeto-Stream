import api from '@/services/api/rxjs'

export class MoviesRest {
  getAllMovies(params?: {}) {
    return api.get('/trending/movie/day', params)
  }
}