/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchParam: '',
    items: [],
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1
  },
  mutations: {
    UPDATE_SEARCH_PARAM(state, param) {
      state.searchParam = param;
    },
    UPDATE_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SUCCESS(state, data) {
      state.items = data.items;
      state.totalItems = data.totalItems;
    },
    NO_RESULTS(state) {
      state.items = [];
      state.totalItems = 0;
      state.currentPage = 1;
    }
  },
  actions: {
    search({ commit, state }, { searchParam, currentPage }) {
      // if searchParam, update state before request
      if (searchParam) {
        commit('UPDATE_SEARCH_PARAM', searchParam);
      }

      // if currentPage, update state before request
      if (currentPage) {
        commit('UPDATE_CURRENT_PAGE', currentPage);
      }

      // Request books
      return Axios.get('volumes', {
        params: {
          q: state.searchParam,
          startIndex: (state.currentPage - 1) * state.itemsPerPage,
          maxResults: state.itemsPerPage
        }
      }).then((response) => {
        console.log(response);
        if (response.data.totalItems > 0 && response.data.hasOwnProperty('items')) {
          commit('SUCCESS', response.data);
        } else {
          commit('NO_RESULTS');
        }
      }).catch(() => {
        commit('ERROR');
      });
    }
  }
});
