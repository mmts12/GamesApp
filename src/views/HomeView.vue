<script>
export default {
  props: ['games'],
  data() {
    return {
      currentPage: 1,
      items: 12,
      numberOfPages: this.games.length / 12,
      filteredGames: [],
    };
  },

  computed: {
    previousPage() {
      if (this.currentPage === 1) return 'page-item disabled';
      else return 'page-item';
    },
    nextPage() {
      if (this.currentPage === 25) return 'page-item disabled';
      else return 'page-item';
    },
  },
  watch: {
    currentPage(newPage, oldPage) {
      console.log(this.currentPage);
      if (newPage !== oldPage) this.filterGames();
    },
  },

  methods: {
    changePage(page) {
      if (page === 'next') {
        this.currentPage++;
        return;
      } else if (page === 'previous') {
        this.currentPage--;
        return;
      } else this.currentPage = page;
    },

    filterGames() {
      let startList = (this.currentPage - 1) * 12;
      let endList = (this.currentPage - 1) * 12 + 12;
      this.filteredGames = this.games.slice(startList, endList);
    },
    setActivePage(index) {
      if (this.currentPage === index) return 'page-item active';
      return 'page-item';
    },
  },

  mounted() {
    console.log(this.games);
    this.filterGames();
  },
};
</script>

<template>
  <div class="app">
    <h2>System requirement App</h2>

    <main>
      <div class="container text-center">
        <div class="row row-cols-4">
          <div
            v-for="game in this.filteredGames"
            :key="game.id"
            class="card"
            style="width: 16rem"
          >
            <img :src="game.thumbnail" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ game.title }}</h5>
              <!-- <p class="card-text">{{ game.short_description }}</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <!-- <div
            class="game-card"
            v-for="game in this.filteredGames"
            :key="game.id"
          >
            <span>{{ game.title }}</span>
            <img :src="game.thumbnail" alt="" />
          </div> -->
        </div>
      </div>
    </main>
  </div>
  <nav aria-label="..." class="paginate-btns">
    <ul class="pagination">
      <li :class="previousPage" @click="changePage('previous')">
        <a class="page-link">Previous</a>
      </li>
      <li
        :class="setActivePage(index + 1)"
        v-for="(i, index) in this.numberOfPages"
        :key="index"
      >
        <a @click="changePage(i)" class="page-link" href="#">{{ i }}</a>
      </li>
      <li :class="nextPage" @click="changePage('next')">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
