<template>
  <main>
    <div class="container">
      <div class="content">
        <list :notes="notes" title="My Notes" />
        <pagination />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pagination from '../components/Pagination.vue'
import List from '../components/List.vue'
import { mapGetters } from 'vuex'
export default defineComponent({
  name: 'NotesList',
  components: {
    Pagination,
    List,
  },
  computed: {
    ...mapGetters(['notes']),
  },
})
</script>
