<template>
  <div class="card z-10 fixed w-full">
    <prime-menubar :model="items" class="bg-black rounded-none">
      <template #start>
        <router-link :to="{ name: 'home', query: { page: 1 } }">
          <img src="../assets/images/image.png" class="hidden md:block h-[40px]" alt="" />
        </router-link>
      </template>
      <template #item="{ item }">
        <router-link :to="item.route">
          <span :class="item.icon" />
          <span class="!flex items-center ml-8 my-2 lg:mb-0 md:ml-6">{{ item.label }}</span>
        </router-link>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2 mr-3">
          <router-link to="/favorites">
            <i class="pi pi-heart-fill" style="font-size: 2rem; color: red"></i>
          </router-link>
        </div>
      </template>
    </prime-menubar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'navbar',
  data() {
    return {
      items: [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'Filmes',
          route: '/movie'
        },
        {
          label: 'Séries',
          route: '/series'
        }
      ]
    }
  }
}
</script>
