import type { Note } from '../../../types/note.type'
const addNote = ({ commit }: any, note: Note) => {
  try {
    note.createdAt = String(note.createdAt)
    note.content = note.content.replace(/[\n\r\s\t]+/g, ' ')
    const availableInLocalStorage: Note[] = JSON.parse(localStorage.getItem('notes') || '[]')

    let id = 0
    availableInLocalStorage.forEach((item) => {
      if (Number(item.id) > id) {
        id = Number(item.id)
      }
    })
    id++
    note.id = String(id)
    const newLocalStorage: Note[] = [...availableInLocalStorage, note]

    localStorage.setItem('notes', JSON.stringify(newLocalStorage))
    commit('addNote', newLocalStorage)
    return 'Added'
  } catch (e) {
    return e
  }
}
const getNote = ({ commit }: any, id: string) => {
  try {
    const availableInLocalStorage: Note[] = JSON.parse(localStorage.getItem('notes') || '[]')
    const found = availableInLocalStorage.find((item) => item.id === id)

    commit('getNote', found)
    return 'Found'
  } catch (e) {
    return e
  }
}
export default {
  addNote,
  getNote,
}
