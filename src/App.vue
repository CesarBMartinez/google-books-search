<template>
  <main id="app" class="container">
    <search-book />
    <list-items />
    <pagination />
  </main>
</template>

<script>
import SearchBook from './components/SearchBook.vue';
import ListItems from './components/ListItems.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'app',
  components: {
    SearchBook,
    ListItems,
    Pagination
  },
};
</script>

<style lang="scss">
// Import Bootstrap SCSS
@import "~bootstrap/scss/bootstrap";
</style>
