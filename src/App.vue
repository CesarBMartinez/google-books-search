<template>
  <main id="app" class="container">
    <search-book/>
  </main>
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
