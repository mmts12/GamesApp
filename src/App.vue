<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import {gameService} from './services/gameService'

export default {
  data: () => ({
    games: [],
  }),

  created() {
    this.fetchGames()
  },

  methods: {
   async fetchGames() {
     console.log( await gameService.query()) 
    },
  },



};


</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
