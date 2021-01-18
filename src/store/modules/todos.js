import axios from 'axios'

const state = {
  todos: []
}
const getters = {
  allTodos: state => state.todos
}
const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get(
      'http://10.177.1.58:8086/products/findAll'
    )
    commit('setTodos', response.data)
  }
}
const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
}
