import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import dog from './modules/dog'
import home from './modules/home'
import cat from './modules/cat'
import bird from './modules/bird'
import fish from './modules/fish'
import pet from './modules/pet'
import order from './modules/order'

Vue.use(Vuex)

// const jokesUrlBase = 'https://v2.jokeapi.dev/joke'
// const resolveJson = res => res.json()

export default new Vuex.Store({
  modules: {
    todos,
    dog,
    home,
    cat,
    bird,
    fish,
    pet,
    order
  }
})
