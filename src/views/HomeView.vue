<script>
export default {
  props: ['games'],
  created() {
    // console.log(console.log(JSON.parse(JSON.stringify(this.games))))
    console.log(this.games);
  },
};
</script>

<template>
  <div class="app">
    <h2>System requirement App</h2>
    <main>
      <ul>
      <li class="game-card" v-for="game in this.games" :key="game.id">
         <span>{{ game.title }}</span> 
         <img :src="game.thumbnail" alt="">
      </li>
    </ul>
    </main>
  </div>
</template>
