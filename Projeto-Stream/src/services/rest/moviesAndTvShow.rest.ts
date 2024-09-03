import type { QueryParamsModel } from '@/model/queryParams.model'
import api from '../api/rxjs'

export class MoviesAndTvShowRest {
  getAllMoviesAndSeries(params?: {}) {
    return api.get(`/trending/all/day`, params)
  }

  getMoviesAndSeriesById(queryParams: QueryParamsModel) {
    return api.get(`/${queryParams.type}/${queryParams.id}`)
  }
}
