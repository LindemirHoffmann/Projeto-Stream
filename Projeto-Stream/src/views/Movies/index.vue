<template>
  <div class="px-3 md:px-10 pt-20 md:pt-24 pb-12">
    <div class="grid grid-cols-12 justify-items-center items-center gap-3">
      <div
        v-for="movie in movies"
        :key="movie?.id"
        class="group col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
      >
        <card :imageEndpoint="movie?.poster_path" :id="movie?.id" :type="movie?.media_type" />
      </div>
    </div>
  </div>
  <prime-paginator
    :first="firstPage"
    :rows="params.rows"
    lazy
    :totalRecords="params.total_results"
    @page="changePage"
  ></prime-paginator>
</template>

<script lang="ts">
import type { MoviesModel } from '@/model/movies.model'
import { MoviesServices } from './movies.services'
import type { PageState } from 'primevue/paginator'

export default {
  data() {
    return {
      params: {
        page: 1,
        rows: 20,
        total_pages: 1000,
        total_results: 10000
      },
      movies: [] as Array<MoviesModel>
    }
  },
  methods: {
    getAllMovies(params?: {}): void {
      this.service.allMovies
      .pipe()
      .subscribe({
        next: (response) => {
          this.params.page = response.page
          this.movies = response.results
        }
      }),
        this.service.getAllMovies(params)
    },
    changePage(event: PageState): void {
      const newPage = event.page + 1
      this.params.page = newPage
      this.$router.push({ query: { page: newPage } })
      this.getAllMovies(this.params)
    }
  },
  computed: {
    service() {
      return new MoviesServices()
    },
    firstPage() {
      return (this.params.page - 1) * this.params.rows
    }
  },
  created() {
    this.$watch(
      () => this.$route.query.page,
      (newPage, oldPage) => {
        if (newPage !== oldPage) {
          this.getAllMovies({ page: this.$route.query.page })
        }
      }
    )
  },
  mounted() {
    this.getAllMovies({ page: this.$route.query.page })
  }
}
</script>
