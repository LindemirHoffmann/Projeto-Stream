import api from '../api/rxjs'

export class SeriesRest {
  getAllSeries(params?: {}) {
    return api.get('/trending/tv/day', params)
  }
}
