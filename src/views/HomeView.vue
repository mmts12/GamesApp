<script>
import Pagination from '../components/Pagination.vue';
import Search from '../components/Search.vue';
export default {
  components: { Pagination, Search },
  props: ['games'],
  data() {
    return {
      currentPage: 1,
      items: 12,
      numberOfPages: this.games.length / 12,
      filteredGames: [],
    };
  },

  computed: {},
  watch: {
    currentPage(newPage, oldPage) {
      if (newPage !== oldPage) this.filterGames();
    },
  },

  methods: {
    changePage(page) {
      if (page === 'next') {
        if (this.currentPage === 25) return;
        this.currentPage++;
        return;
      } else if (page === 'previous') {
        if (this.currentPage === 1) return;
        this.currentPage--;
        return;
      } else this.currentPage = page;
    },

    filterGames() {
      let startList = (this.currentPage - 1) * 12;
      let endList = (this.currentPage - 1) * 12 + 12;
      this.filteredGames = this.games.slice(startList, endList);
    },
    onSetFilter (event){
      console.log('hiiii')
      console.log(event);
    }
  },

  mounted() {
    this.filterGames();
  },
};
</script>

<template>
  <div class="app">
    <h2>System requirement App</h2>
    
    <div class=".container-fluid text-center">
      <search
      @onSetFilter="onSetFilter"
      ></search>
      <div class="row justify-content-center"></div>
      <div class="row row-cols-md justify-content-center">
        <div
          v-for="game in this.filteredGames"
          :key="game.id"
          class="card card-game"
          style="width: 12rem"
        >
          <img :src="game.thumbnail" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <p class="card-text">{{ game.short_description }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
    <pagination
      @changePage="changePage"
      :numberOfPages="numberOfPages"
      :currentPage="currentPage"
    >
    </pagination>
  </div>
</template>
