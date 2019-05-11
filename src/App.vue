<template>
  <main id="app" class="container">
    <search-book />
    <list-items />
  </main>
</template>

<script>
import SearchBook from './components/SearchBook.vue';
import ListItems from './components/ListItems.vue';

export default {
  name: 'app',
  components: {
    SearchBook,
    ListItems
  },
};
</script>

<style lang="scss">
// Import Bootstrap SCSS
@import "~bootstrap/scss/bootstrap";
</style>
