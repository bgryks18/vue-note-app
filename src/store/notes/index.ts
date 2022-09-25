import getters from './getters/notes.getter'
import actions from './actions/notes.action'
import mutations from './mutations/notes.mutation'

const initState = {
  notes: JSON.parse(localStorage.getItem('notes') || '[]'),
  note: {},
}
export default {
  state: initState,
  getters,
  actions,
  mutations,
}
