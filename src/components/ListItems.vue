<template>
  <div>
    <ul class="list-unstyled">
      <li class="media py-4" v-for="(item, index) in items" :key="item.id">
        <img :src="thumbnail(item)" class="mr-3" :alt="item.volumeInfo.title">
        <div class="media-body">
          <!-- Title -->
          <h5 class="mt-0 mb-1">{{ item.volumeInfo.title }}</h5>

          <!-- Details -->
          <small v-if="item.volumeInfo.authors">by {{ bookAuthors(item) }}</small>
          <small v-if="item.volumeInfo.publishedDate"> - {{ item.volumeInfo.publishedDate.substring(0, 4) }}</small>
          <small v-if="item.volumeInfo.publisher"> - Published by {{ item.volumeInfo.publisher }}</small><br>

          <!-- Book Text Snippet -->
          <p v-if="item.searchInfo" v-html="item.searchInfo.textSnippet"></p>

          <!-- Book Description Button -->
          <a class="btn btn-outline-info mt-1" v-if="item.volumeInfo.description" data-toggle="collapse"
            :href="`#collapseDescription${index}`" role="button" aria-expanded="false"
            :aria-controls="`collapseDescription${index}`">
            Description</a>

          <!-- Book Preview Link -->
          <a class="btn btn-link mt-1" v-if="item.volumeInfo.previewLink" :href="item.volumeInfo.previewLink" target="_blank">Preview</a>

          <!-- Book Description Collapse -->
          <div class="collapse mt-3" :id="`collapseDescription${index}`" v-if="item.volumeInfo.description">
              {{ item.volumeInfo.description }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-items',
  methods: {
    bookAuthors(book) {
      let { authors } = book.volumeInfo;
      if (authors.length < 3) {
        authors = authors.join(' and ');
      } else if (authors.length > 2) {
        const lastAuthor = ` and ${authors.slice(-1)}`;
        authors.pop();
        authors = authors.join(', ');
        authors += lastAuthor;
      }
      return authors;
    },
    thumbnail(item) {
      let placeholder = 'https://via.placeholder.com/128x186?text=Not+Avaliable';
      if (item.volumeInfo.imageLinks) {
        placeholder = item.volumeInfo.imageLinks.thumbnail;
      }
      return placeholder;
    }
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>

<style lang="scss" scoped>
.media:not(:last-child) {
  border-bottom: 1px solid #ced4da;
}
</style>
