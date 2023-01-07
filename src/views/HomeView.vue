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
  <h2>this is System requirement App</h2>

  <main>
    <ul v-for="game in this.games" :key="game.id">
      <li>
        {{ game.title }}
      </li>
    </ul>
  </main>
</template>
