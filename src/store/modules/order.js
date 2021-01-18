import axios from 'axios'

const state = {
  orders: []
}
const getters = {
  allOrders: state => state.orders
}
const actions = {
  async fetchOrders ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findAll'
    )
    commit('setOrders', response.data)
  }
}
const mutations = {
  setOrders: (state, orders) => (state.orders = orders)
}

export default {
  state,
  getters,
  actions,
  mutations
}
