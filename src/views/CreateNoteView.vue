<template>
  <main>
    <div class="container">
      <div class="content">
        <Form class="form" @submit="formAddNote" v-slot="{ values, errors, isSubmitting }" ref="noteApp">
          <div class="form-title">
            <h3>Create Note</h3>
          </div>
          <div class="form-control-area">
            <label for="title">Title</label>
            <Field name="title" rules="required" v-slot="{ field, errorMessage }">
              <input type="text" id="title" class="form-control" v-bind="field" />
              <span class="errorMessage"> {{ errorMessage && '⛔️ ' + errorMessage }}</span>
            </Field>
          </div>
          <div class="form-control-area">
            <label for="content">Note</label>
            <Field name="content" rules="required" v-slot="{ field, errorMessage }">
              <textarea
                id="content"
                class="form-control"
                @keydown="(e) => textareaKeyDown(e, values, errors)"
                v-bind="field"
              ></textarea>
              <span class="errorMessage"> {{ errorMessage && '⛔️ ' + errorMessage }}</span>
            </Field>
          </div>
          <div class="form-control-area">
            <button class="btn btn-primary" :disabled="isSubmitting">{{ isSubmitting ? 'Submitting' : 'Submit' }}</button>
          </div>
        </Form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { Form, Field, defineRule } from 'vee-validate'
defineRule('required', (value: any) => {
  if (!value || !value.length) {
    return 'This field is required'
  }
  return true
})

interface FormNote {
  title: string
  content: string
}
export default defineComponent({
  name: 'CreateNote',
  data() {
    return {}
  },
  components: {
    Form,
    Field,
  },
  computed: {
    ...mapGetters(['notes']),
  },
  methods: {
    ...mapActions(['addNote']),
    async formAddNote(formVal: FormNote) {
      const result = await this.addNote({
        createdAt: new Date(),
        owner: window.name,
        ...formVal,
      })
      if (result === 'Added') {
        this.$notify({
          title: 'Success',
          text: 'Added successfully',
        })
        const noteApp = this.$refs.noteApp as HTMLFormElement
        noteApp.resetForm()
      } else {
        this.$notify({
          title: 'An error occured',
          text: result.message,
        })
      }
    },
    handleSubmit(formVal: FormNote) {
      this.formAddNote(formVal)
    },
    textareaKeyDown(e: KeyboardEvent, formVal: FormNote, errors: any) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
          this.formAddNote(formVal)
        }
      }
    },
  },
})
</script>
,
