<template>
  <main
    :style="{
      backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0.4)), url(${backgroundUrl})`
    }"
    class="bg-fixed bg-center bg-cover h-screen py-24 px-10 grid items-center">
    <section class="p-5 w-full md:w-4/12">
        <h1 class="text-3xl font-base font-bold whitespace-normal text-white">{{ nameOrTitle }}</h1>
        <div class="flex gap-4 items-center my-2 text-white text-sm">
          <span class="font-base font-medium">{{ firstAirDate }}</span>
          <span class="text-green-700 font-base font-bold">{{ averageVote }}</span>
          <span class="font-base font-medium">|</span>
          <span class="font-base font-medium">{{ movieOrTvShow?.runtime }} min</span>
        </div>
        <div class="text-white mb-2 flex flex-col gap-2">
          <h3 class="text-lg font-bold">{{ movieOrTvShow?.tagline }}</h3>
          <span class="text-sm font-base font-medium line-clamp-6 text-justify">{{
            movieOrTvShow?.overview
          }}</span>
        </div>
        <div class="text-white py-5">
          <prime-button
            @click="setItemLocalStorage"
            class="border-2 border-white rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold"
            label="Favoritar"
            icon="pi pi-heart-fill"
          />
        </div>
    </section>
  </main>
</template>
<script lang="ts">
import { QueryParamsModel } from '@/model/queryParams.model'
import { HomeService } from './home.service'
import type { MovieAndTvShow } from '@/model/movieAndTvShow.model'
import LocalStorage from '@/utils/localStorage.utils'

export default {
  data() {
    return {
      backgroundBaseUrl: 'https://image.tmdb.org/t/p/original/',
      movieOrTvShow: {} as MovieAndTvShow,
      favorites: [] as MovieAndTvShow[]
    }
  },
  methods: {
    getMovieAndTvShowById(queryParams: QueryParamsModel): void {
      this.service.allMoviesAndTvShows.pipe().subscribe({
        next: (response) => (this.movieOrTvShow = response)
      })
      this.service.getMoviesAndSeriesById(queryParams)
    },
    getItemLocalStorage(): MovieAndTvShow[] {
      return (this.favorites = this.localStorage.getItem('movies') as MovieAndTvShow[])
    },
    setItemLocalStorage(): void {
      this.favorites.push({ ...this.movieOrTvShow, media_type: this.$route.params.type as string })
      this.favorites.push({ ...this.movieOrTvShow, media_type: this.$route.params.type as string })
      return this.localStorage.setItem('movies', this.favorites)
    }
  },
  computed: {
    service(): HomeService {
      return new HomeService()
    },
    localStorage() {
      return new LocalStorage()
    },
    queryParamsUrl(): QueryParamsModel {
      return new QueryParamsModel(
        this.$route.params.type as string,
        this.$route.params.id as string
      )
    },
    backgroundUrl(): String {
      return this.movieOrTvShow?.backdrop_path
        ? this.backgroundBaseUrl + this.movieOrTvShow.backdrop_path
        : ''
    },
    averageVote(): String {
      return this.movieOrTvShow?.vote_average?.toFixed(2) as String
    },
    firstAirDate(): String {
      return (
        this.movieOrTvShow?.first_air_date?.split('-')[0] ||
        (this.movieOrTvShow?.release_date?.split('-')[0] as String)
      )
    },
    nameOrTitle(): String {
      return (this.movieOrTvShow?.name as String) || this.movieOrTvShow?.title!
    }
  },
  mounted() {
    this.getItemLocalStorage()
    this.getMovieAndTvShowById(this.queryParamsUrl)
  }
}
</script>
