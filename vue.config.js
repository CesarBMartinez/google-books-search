module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        data: '@import "@/assets/scss/variables.scss";'
      }
    }
  }
};
