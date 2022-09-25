<template>
  <main>
    <div class="container">
      <div class="content">
        <div class="list">
          <div class="header">
            <h3>{{ note.title }}</h3>
            <small>{{ showDate(note.createdAt) }}</small>
          </div>
          <div class="listItem">
            <div class="listContent">
              {{ note.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import moment from '../utils/moment'
import { Note } from '../types/note.type'

export default defineComponent({
  name: 'NotesList',

  created() {
    this.getNote(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['note']),
  },
  methods: {
    ...mapActions(['getNote']),
    showDate(createdAt: Date) {
      return moment(new Date(createdAt)).format('dddd, MMMM Do YYYY, H:mm:ss ')
    },
  },
})
</script>
