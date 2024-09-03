import type { QueryParamsModel } from '@/model/queryParams.model'
import { MoviesAndTvShowRest } from '@/services/rest/moviesAndTvShow.rest'
import { BehaviorSubject, Observable } from 'rxjs'

export class HomeService {
  constructor(private _api = new MoviesAndTvShowRest()) {}
  private allMovieAndTvShow$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  allMoviesAndTvShows: Observable<any> = this.allMovieAndTvShow$.asObservable()
  getAllMoviesAndTvShows(params?: {}) {
    this._api
      .getAllMoviesAndSeries(params)
      .pipe()
      .subscribe({
        next: (response) => {
          this.allMovieAndTvShow$.next(response)
        },
        error: (err) => {
          console.log('falhou ao pegar movie and tvshow')
          this.allMovieAndTvShow$.next({ error: Error })
        }
      })
  }

  getMoviesAndSeriesById(queryParams: QueryParamsModel) {
    this._api
      .getMoviesAndSeriesById(queryParams)
      .pipe()
      .subscribe({
        next: (response) => {
          this.allMovieAndTvShow$.next(response)
        },
        error: (err) => {
          console.log('falhou ao pegar os movie and tvshow por id')
          this.allMovieAndTvShow$.next({ error: Error })
        }
      })
  }
}
