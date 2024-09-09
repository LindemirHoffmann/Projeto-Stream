import { SeriesRest } from '@/services/rest/series.rest'
import { BehaviorSubject, Observable } from 'rxjs'

export class SeriesServices {
  constructor(private _api = new SeriesRest()) {}
  private series$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  series: Observable<any> = this.series$.asObservable()
  getAllSeries(params?: {}) {
    this._api
      .getAllSeries(params)
      .pipe()
      .subscribe({
        next: (response) => {
          this.series$.next(response)
        }
      })
  }
}
