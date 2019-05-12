<template>
  <div id="app" class="d-flex flex-column">
    <main class="container mb-5">
      <search-book />
      <list-items />
      <pagination />
    </main>
    <footer class="text-center p-3 mt-auto bg-light text-dark">
      Developed by <a href="https://github.com/CesarBMartinez" target="_blank">César Martinez</a> with Vue, Google Book API, ☕ and ❤️
    </footer>
  </div>
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
#app {
  min-height: 100vh;
}
</style>
