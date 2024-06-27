import { Observable } from "rxjs";
import api from "@/services/api/rxjs"

export class SeriesRest {
    getSeries(): Observable<any> {
      //const url: string = `/discover/tv`;
      return api.get(url);
    }
    getSerieById(id:string):Observable<any>{
      //const url:string =`/tv/${id}`;
      return api.get(url)
    }
  }