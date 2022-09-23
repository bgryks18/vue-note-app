<template>
  <main>
    <div class="container">
      <div class="content">
        <list />
        <pagination />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pagination from '../components/Pagination.vue'
import List from '../components/List.vue'
export default defineComponent({
  name: 'NotesList',
  components: {
    Pagination,
    List,
  },
})
</script>
