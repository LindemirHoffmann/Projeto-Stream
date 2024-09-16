<template>
  <div class="px-3 md:px-10 pt-20 md:pt-24 pb-12">
    <div class="grid grid-cols-12 justify-items-center items-center gap-3">
      <div
        v-for="movieOrTvShow in moviesAndTvShows"
        :key="movieOrTvShow?.id"
        class="group col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
      >
        <card
          :imageEndpoint="movieOrTvShow?.poster_path"
          :id="movieOrTvShow?.id"
          :type="movieOrTvShow?.media_type"
        />
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
import type { PageState } from 'primevue/paginator'
import { HomeService } from './home.service'
import type { MovieAndTvShow } from '@/model/movieAndTvShow.model'
export default {
  data() {
    return {
      params: {
        page: Number(this.$route.query.page) || 1,
        rows: 20,
        total_pages: 500,
        total_results: 10000
      },
      moviesAndTvShows: [] as Array<MovieAndTvShow>
    }
  },
  methods: {
    getAllMovieAndTv(params?: {}): void {
      this.service.allMoviesAndTvShows.pipe().subscribe({
        next: (response) => {
          this.params.page = response?.page
          this.moviesAndTvShows = response.results
          if (response?.error) {
            this.showError()
          } else {
            this.moviesAndTvShows = response.results
          }
        }
      })
      this.service.getAllMoviesAndTvShows(params)
    },
    changePage(event: PageState): void {
      const newPage = event.page + 1
      this.params.page = newPage
      this.$router.push({ query: { page: newPage } })
      this.getAllMovieAndTv(this.params)
    },
    showError(): void {
      this.$toast.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Falhou ao buscar fimes e series',
        life: 6000
      })
    }
  },
  computed: {
    service(): HomeService {
      return new HomeService()
    },
    firstPage(): number {
      return (this.params.page - 1) * this.params.rows
    }
  },
  created() {
    this.$watch(
      () => this.$route.query.page,
      (newPage, oldPage) => {
        if (newPage !== oldPage) {
          this.getAllMovieAndTv({ page: this.$route.query.page })
        }
      }
    )
  },
  mounted() {
    this.getAllMovieAndTv({ page: this.$route.query.page })
  }
}
</script>