<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    filtered() {
      this.$emit('onSetFilter', this.text);
    },
  },
};
</script>
<template>
  <form @submit.prevent="filtered">
    <input
      v-model="text"
      
      class="search-input"
      placeholder="Search Game"
      type="text"
    />
  </form>
</template>
<!-- @keyup="filtered" -->

<style scoped>
.search-input {
  width: 40%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  margin-top: 30px;
  margin-bottom: 30px;
}
.search-input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}
</style>
