import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2,
    num: 100,
    text: ''
  },
  getters: {
    add: state => {
      // eslint-disable-next-line no-return-assign
      return state.count += 100
    }
  },
  mutations: {
    add (state, playload) {
      state.num += playload.amount
      state.text = playload.text
    },
    reduce (state) {
      state.num -= 1
    }
  },
  actions: {
    addaction (context) {
      setTimeout(function () {
        context.commit('add', {text: '增加5', amount: 5})
      }, 1000)
    },
    reduceaction ({ commit }) {
      commit('reduce')
    }
  }
})
export default store
