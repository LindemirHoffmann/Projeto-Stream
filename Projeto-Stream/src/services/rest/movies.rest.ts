import { Observable } from "rxjs";
import api from "@/services/api/rxjs"

export class MoviesRest {
    getMovies(): Observable<any> {
      //const url: string = `/discover/tv`;
      return api.get(url);
    }
    getMoviesById(id:string):Observable<any>{
      //const url:string =`/tv/${id}`;
      return api.get(url)
    }
  }