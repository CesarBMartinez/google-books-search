<template>
  <div id="app">
    <search-book/>
  </div>
</template>

<script>
import SearchBook from './components/SearchBook.vue';

export default {
  name: 'app',
  components: {
    SearchBook
  },
};
</script>

<style lang="scss">
// Import Bootstrap SCSS
@import "~bootstrap/scss/bootstrap";
</style>
