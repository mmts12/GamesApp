<script>
import { def } from '@vue/shared';

export default {
  props: {
    numberOfPages: Number,
    currentPage:Number
  },
  data() {
    return {};
  },
  computed:{
    previousPage() {
      if (this.currentPage === 1) return 'page-item disabled';
      else return 'page-item';
    },
    nextPage() {
      if (this.currentPage === 25) return 'page-item disabled';
      else return 'page-item';
    },
  },
  methods:{
    setActivePage(index) {
      if (this.currentPage === index) return 'page-item active';
      return 'page-item';
    },
  }
};
</script>

<template>
  <nav aria-label="..." class="paginate-btns">
    <ul class="pagination">
      <li :class="previousPage" @click="$emit('changePage', 'previous')">
        <a class="page-link">Previous</a>
      </li>
      <li
        :class="setActivePage(index+1)"
        v-for="(i, index) in this.numberOfPages"
        :key="index"
      >
        <a @click="$emit('changePage', i)" class="page-link" href="#">{{
          i
        }}</a>
      </li>
      <li :class="nextPage" @click="$emit('changePage', 'next')">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>


