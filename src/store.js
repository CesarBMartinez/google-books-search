/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchParam: '',
    items: [],
    totalItems: 0
  },
  mutations: {
    UPDATE_SEARCH_PARAM(state, param) {
      state.searchParam = param;
    },
    SUCCESS(state, data) {
      state.items = data.items;
      state.totalItems = data.totalItems;
    },
    NO_RESULTS(state) {
      state.items = [];
      state.totalItems = 0;
    }
  },
  actions: {
    search({ commit, state }, searchParam) {
      // if searchParam, update state before request
      if (searchParam) {
        commit('UPDATE_SEARCH_PARAM', searchParam);
      }

      // Request books
      return Axios.get('volumes', {
        params: {
          q: state.searchParam
        }
      }).then((response) => {
        console.log(response);
        if (response.data.totalItems > 0) {
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
