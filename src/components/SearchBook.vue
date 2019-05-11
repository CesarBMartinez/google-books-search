<template>
  <div class="text-center">
    <!-- Highlight Title -->
    <h1 class="display-1">Books</h1>

    <!-- Search Form -->
    <form id="search-form" class="mx-auto" @submit.prevent="dispatchSearch" novalidate="true">
      <!-- Search Input -->
      <input class="form-control form-control-lg" maxlength="2048" name="q" type="text" autocapitalize="off" autocomplete="off" autocorrect="off"
        spellcheck="false" title="Search" value="" placeholder="Search for a book 🔎📚" v-model="searchInput">
      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary mt-3">Search</button>
    </form>

    <h6 class="text-left text-secondary mt-3">{{ $store.state.totalItems }} results for '{{ $store.state.searchParam }}'</h6>
  </div>
</template>

<script>
export default {
  name: 'search-book',
  data() {
    return {
      searchInput: ''
    };
  },
  methods: {
    dispatchSearch() {
      if (this.searchInput) {
        return this.$store.dispatch('search', this.searchInput);
      }
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
form {
  max-width: 600px;
}
</style>
