<template>
  <prime-card unstyled>
    <template #content>
      <router-link :to="`/details/${type}/${id}`">
        <div class="relative flex items-center justify-center p-0 md:p-5">
          <img
            alt="user header"
            :src="imageUrl"
            class="opacity-100 group-hover:opacity-50 rounded-lg"
          />
        </div>
      </router-link>
    </template>
  </prime-card>
</template>
<script lang="ts">
export default {
  props: {
    imageEndpoint: String,
    id: Number,
    type: String
  },
  data() {
    return {
      baseURL: 'https://image.tmdb.org/t/p/w500'
    }
  },
  computed: {
    imageUrl(): string {
      return this.baseURL + this.imageEndpoint
    }
  }
}
</script>
