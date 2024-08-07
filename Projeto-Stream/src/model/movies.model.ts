export class MoviesModel {
  constructor(
    public backdrop_path?: string,
    public id?: number,
    public title?: string,
    public origin_title?: string,
    public overview?: string,
    public poster_path?: string,
    public media_type?: string,
    public adult?: string,
    public original_language?: string,
    public genre_ids?: number[],
    public popularity?: number,
    public release?: string,
    public vote?: boolean,
    public vote_average?: number,
    public vote_count?: number
  ) {}
}
