<template>
  <div class="brand mr-auto">
    <router-link to="/"><v-icon name="io-home" scale="1.2" /></router-link>
  </div>
  <nav class="topMenu">
    <ul>
      <li>
        <router-link to="/notes/create"> <v-icon name="hi-solid-plus" /> Create Note</router-link>
      </li>
      <li>
        <router-link to="/notes"><v-icon name="gi-notebook" /> My Notes</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Topmenu',
})
</script>
