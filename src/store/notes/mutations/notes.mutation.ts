import type { Note } from '../../../types/note.type'
const addNote = (state: any, notes: Note[]) => {
  state.notes = notes
}
export default {
  addNote,
}
