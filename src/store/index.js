import { createStore } from 'vuex'

export default createStore({
  state: {
    news: null,
  },
  getters: {
    NEWS: state => {
        return state.news
    }
  },
  mutations: {
    SET_NEWS: (state, value) => {
        state.news = value
    }
  },
  actions: {
  },
  modules: {},
})