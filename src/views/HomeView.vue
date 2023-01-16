<script>
import { computed } from '@vue/runtime-core';
export default {
  props: ['games'],
    data() {
    return {
      currentPage: 1,
      numberOfPages:this.games.length / 12,
      filteredGames :[]
  }
  },

  computed:{
    filterGames (){
      this.filteredGames = this.games.slice(this.currentPage-1,12);
      console.log(this.filteredGames)
    }
    },

    methods:{
      nextPage(page){
        this.currentPage= page;
        console.log(this.currentPage);
      }
    },

  mounted() {
    console.log(this.games.length);
    console.log(this.filterGames)

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
    <button @click="nextPage(i)"  v-for="(i, index) in this.numberOfPages" :key="index">
     {{ i }}
    </button>
  </div>
  </div>
</template>
