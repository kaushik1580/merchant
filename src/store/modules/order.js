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
      'http://10.177.1.152:8082/order/save'
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
