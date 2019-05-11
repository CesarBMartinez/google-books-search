import Vue from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle';
import Axios from 'axios';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

// Axios Base URL
Axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

// Query Param KEY, required for Google Book API
Axios.defaults.params = {};
Axios.defaults.params.key = 'AIzaSyDcEOfVnOfuh0KCFRIx1BucqhO7mJKBhjg';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
