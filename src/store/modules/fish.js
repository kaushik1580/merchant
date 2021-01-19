import axios from 'axios'

const state = {
  fishs: []
}
const getters = {
  allFishs: state => state.fishs
}
const actions = {
  async fetchFishs ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findByCategoryName/Reptiles and Fishes'
    )
    commit('setFishs', response.data)
  }
}
const mutations = {
  setFishs: (state, fishs) => (state.fishs = fishs)
}

export default {
  state,
  getters,
  actions,
  mutations
}
