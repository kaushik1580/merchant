import axios from 'axios'

const state = {
  pets: []
}
const getters = {
  allPets: state => state.pets
}
const actions = {
  async fetchPets ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findAll'
    )
    commit('setPets', response.data)
  }
}
const mutations = {
  setPets: (state, pets) => (state.pets = pets)
}

export default {
  state,
  getters,
  actions,
  mutations
}
