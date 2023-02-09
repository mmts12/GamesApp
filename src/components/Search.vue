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


