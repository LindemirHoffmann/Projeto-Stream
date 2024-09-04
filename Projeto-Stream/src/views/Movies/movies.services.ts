import { MoviesRest } from '@/services/rest/movies.rest'
import { BehaviorSubject, Observable } from 'rxjs'

export class MoviesServices {
  constructor(private _api = new MoviesRest()) {}
  private allMovies$: BehaviorSubject<any> = new BehaviorSubject<any>([])

  allMovies: Observable<any> = this.allMovies$.asObservable()

  getAllMovies(params?: {}) {
    this._api
      .getAllMovies(params)
      .pipe()
      .subscribe({
        next: (response) => {
          this.allMovies$.next(response)
        }
      })
  }
}
