import axios from 'axios'

const state = {
  cats: []
}
const getters = {
  allCats: state => state.cats
}
const actions = {
  async fetchCats ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findAll'
    )
    commit('setCats', response.data)
  }
}
const mutations = {
  setCats: (state, cats) => (state.cats = cats)
}

export default {
  state,
  getters,
  actions,
  mutations
}
