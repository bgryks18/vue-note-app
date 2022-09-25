import { createStore } from 'vuex'
import notes from './notes/index'
const store = createStore({
  modules: {
    notes,
  },
})

export default store
