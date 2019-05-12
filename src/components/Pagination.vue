<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center" v-show="totalItems > 0">
      <!-- First Page -->
      <li class="page-item d-none d-sm-block" :class="{ disabled: currentPage === 1}">
        <a class="page-link" href="#" @click.prevent="changePage(1)">First</a>
      </li>
      <!-- Previous Page -->
      <li class="page-item" :class="{ disabled: currentPage === 1}">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <!-- Pages -->
      <li class="page-item" :class="{ active: page === currentPage }" v-for="(page) in pagesRange" :key="page">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <!-- Next Page -->
      <li class="page-item" :class="{ disabled: currentPage === pagesTotal.length }">
        <a class="page-link" @click.prevent="changePage(currentPage + 1)" href="#">Next</a>
      </li>
      <!-- Last Page -->
      <li class="page-item d-none d-sm-block" :class="{ disabled: currentPage === pagesTotal.length }">
        <a class="page-link" @click.prevent="changePage(pagesTotal.length)" href="#">Last</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'pagination',
  methods: {
    changePage(page) {
      this.$store.dispatch('search', { currentPage: page });
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    totalItems() {
      return this.$store.state.totalItems;
    },
    itemsPerPage() {
      return this.$store.state.itemsPerPage;
    },
    // Calcula o total de páginas
    pagesTotal() {
      const { totalItems, itemsPerPage } = this;
      // eslint-disable-next-line
      const pages = new Array(Math.ceil(totalItems / itemsPerPage)).fill(0).map((x, i) => i += 1);
      return pages;
    },
    // Cria o range de paginação considerando o total de páginas
    pagesRange() {
      const pages = this.pagesTotal;
      const maxSize = 5;
      const page = this.currentPage;
      let start = Math.max((page - 1) - Math.floor(maxSize / 2), 0);
      let end = start + maxSize;

      if (end >= pages.length) {
        end = pages.length;
        start = Math.max((end - maxSize), 0);
      }
      return pages.slice(start, end);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
