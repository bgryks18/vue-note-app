<template>
  <main>
    <div class="container">
      <div class="content">
        <form class="form" @submit="handleSubmit">
          <div class="form-title">
            <h3>Create Note</h3>
          </div>
          <div class="form-control-area">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="note.title" class="form-control" />
          </div>
          <div class="form-control-area">
            <label for="">Note</label>
            <textarea name="" id="" class="form-control" v-model="note.content"></textarea>
          </div>
          <div class="form-control-area">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CreateNote',
  data() {
    return {
      note: {
        title: '',
        content: '',
      },
    }
  },
  components: {},
  methods: {
    handleSubmit(e: SubmitEvent) {
      e.preventDefault()

      console.log({
        createdAt: new Date(),
        owner: 'Buğra',
        ...this.note,
      })
    },
  },
})
</script>
