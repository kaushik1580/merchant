import axios from 'axios'

const state = {
  dogs: []
}
const getters = {
  allDogs: state => state.dogs
}
const actions = {
  async fetchDogs ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findByCategoryName/Dogs'
    )
    commit('setDogs', response.data)
  }
}
const mutations = {
  setDogs: (state, dogs) => (state.dogs = dogs)
}

export default {
  state,
  getters,
  actions,
  mutations
}
