<script>
export default {
  props: ['games'],
  data() {
    return {
      currentPage: 1,
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
      this.currentPage = this.currentPage + page;
      console.log(this.currentPage);
    },

    filterGames() {
      let startList = (this.currentPage - 1) * 12;
      let endList = (this.currentPage - 1) * 12 + 12;
      this.filteredGames = this.games.slice(startList, endList);
    },
  },

  mounted() {
    console.log(this.games.length);
    this.filterGames();
  },
};
</script>

<template>
  <div class="app">
    <h2>System requirement App</h2>
    <main>
      <ul>
        <li class="game-card" v-for="game in this.filteredGames" :key="game.id">
          <span>{{ game.title }}</span>
          <img :src="game.thumbnail" alt="" />
        </li>
      </ul>
    </main>
    <div class="paginate-btns">
      <button @click="changePage(-1)">Prev Page</button>
      <button
        @click="changePage(i)"
        v-for="(i, index) in this.numberOfPages"
        :key="index"
      >
        {{ i }}
      </button>
      <button @click="changePage(1)">Next Page</button>
    </div>
  </div>
</template>
