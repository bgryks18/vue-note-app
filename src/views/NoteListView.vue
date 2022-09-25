<template>
  <main>
    <div class="container">
      <div class="content">
        <div class="list" v-if="items.length > 0">
          <div class="header">
            <h3>My Notes</h3>
          </div>
          <div class="listItem" v-for="item in items" :key="item.createdAt">
            <div class="listTitle">
              <span>
                <router-link :to="'/note/' + item.id">{{ item.title }}</router-link>
              </span>
            </div>
            <div class="listContent">
              <p>
                {{ showContent(item.content) }}
                <router-link :to="'/note/' + item.id" v-if="item.content.length > 100">see more</router-link>
              </p>
            </div>
            <div class="listInfo">
              <small>{{ showDate(item.createdAt) }}</small>
            </div>
          </div>
        </div>
        <div class="list" v-else>
          <div class="header">
            <h3>No record.</h3>
          </div>
        </div>
        <pagination :items="notes" page="notes" v-if="items.length > 0" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pagination from '../components/Pagination.vue'
import { mapGetters } from 'vuex'
import moment from '../utils/moment'
import { Note } from '../types/note.type'

export default defineComponent({
  name: 'NotesList',
  components: {
    Pagination,
  },
  computed: {
    ...mapGetters(['notes']),
    items() {
      const notes = this.notes as Note[]
      const page = this.$route.params.id ? Number(this.$route.params.id) : 1
      const max = page * 5
      const min = max - 5
      return notes.slice(min, max)
    },
  },
  methods: {
    showDate(createdAt: Date) {
      return moment(new Date(createdAt)).format('dddd, MMMM Do YYYY, H:mm:ss ')
    },
    showContent(content: string) {
      const max = 100
      if (content.length > max) {
        return content.split('').slice(0, max).join('')
      }
      return content
    },
  },
})
</script>
