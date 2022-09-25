<template>
  <div class="list">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>
    <div class="listItem" v-for="item in notes" :key="item.createdAt">
      <div class="listTitle">
        <span>
          <router-link to="/">{{ item.title }}</router-link>
        </span>
      </div>
      <div class="listContent">
        <p>
          {{ item.content }}
          <router-link to="/">see more</router-link>
        </p>
      </div>
      <div class="listInfo">
        <small>{{ showDate(item.createdAt) }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Note } from '../types/note.type'
import moment from '../utils/moment'

export default defineComponent({
  name: 'List',
  props: {
    notes: {
      type: Array as PropType<Note[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    showDate(createdAt: Date) {
      return moment(new Date(createdAt)).format('dddd, MMMM Do YYYY, H:mm:ss ')
    },
  },
})
</script>
