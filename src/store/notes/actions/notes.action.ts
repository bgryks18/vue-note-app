import type { Note } from '../../../types/note.type'
const addNote = ({ commit }: any, note: Note) => {
  try {
    note.createdAt = String(note.createdAt)
    note.content = note.content.replace(/[\n\r\s\t]+/g, ' ')
    const availableInLocalStorage: Note[] = JSON.parse(localStorage.getItem('notes') || '[]')
    const newLocalStorage: Note[] = [...availableInLocalStorage, note]

    localStorage.setItem('notes', JSON.stringify(newLocalStorage))
    commit('addNote', newLocalStorage)
    return 'Added'
  } catch (e) {
    return e
  }
}
export default {
  addNote,
}
