<template>
  <div class="px-3 md:px-10 pt-20 md:pt-24 pb-12">
    <div class="grid grid-cols-12 justify-items-center items-center gap-3">
      <div
        v-for="tvShow in tvShows"
        :key="tvShow?.id"
        class="group col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
      >
        <card :imageEndpoint="tvShow?.poster_path" :id="tvShow?.id" :type="tvShow?.media_type" />
      </div>
    </div>
  </div>
  <prime-paginator
    :first="firstPage"
    :rows="params.rows"
    lazy
    :totalRecords="params.total_results"
    @page="changePage"
  />
</template>
<script lang="ts">
import type { PageState } from 'primevue/paginator'
import { SeriesServices } from './series.service'
import type { SeriesModel } from '@/model/series.model'

export default {
  data() {
    return {
      params: {
        page: 1,
        rows: 20,
        total_pages: 1000,
        total_results: 10000
      },
      tvShows: [] as Array<SeriesModel>
    }
  },
  methods: {
    getAllSeries(params?: {}): void {
      this.service.series.pipe().subscribe({
        next: (response) => {
          this.params.page = response.page
          this.tvShows = response.results
        }
      })
      this.service.getAllSeries(params)
    },
    changePage(event: PageState): void {
      const newPage = event.page + 1
      this.params.page = newPage
      this.$router.push({ query: { page: newPage } })
      this.getAllSeries(this.params)
    }
  },
  computed: {
    service(): SeriesServices {
      return new SeriesServices()
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
          this.getAllSeries({ page: this.$route.query.page })
        }
      }
    )
  },
  mounted() {
    this.getAllSeries({ page: this.$route.query.page })
  }
}
</script>
