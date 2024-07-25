export class MovieAndTvShow {
  constructor(
    public backdrop_path?: string,
    public id?: number,
    public name?: string,
    public original_name?: string,
    public overview?: string,
    public poster_path?: string,
    public media_type?: string,
    public adult?: boolean,
    public original_language?: string,
    public genre_ids?: number[],
    public popularity?: number,
    public first_air_date?: string,
    public vote_average?: number,
    public vote_count?: number,
    public origin_country?: string[],
    public title?: string,
    public original_title?: string,
    public release_date?: string,
    public video?: boolean,
    public runtime?: number,
    public episode_runtime?: number,
    public tagline?: String
  ) {}
}