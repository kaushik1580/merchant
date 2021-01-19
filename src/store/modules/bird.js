import axios from 'axios'

const state = {
  birds: []
}
const getters = {
  allBirds: state => state.birds
}
const actions = {
  async fetchBirds ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findByCategoryName/Birds'
    )
    commit('setBirds', response.data)
  }
}
const mutations = {
  setBirds: (state, birds) => (state.birds = birds)
}

export default {
  state,
  getters,
  actions,
  mutations
}
