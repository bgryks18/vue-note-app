import type { Note } from '../../../types/note.type'
const addNote = (state: any, notes: Note[]) => {
  state.notes = notes
}
const getNote = (state: any, note: any) => {
  state.note = note
}
export default {
  addNote,
  getNote,
}
