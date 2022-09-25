<template>
  <header class="header">
    <div class="container">
      <topmenu />
    </div>
  </header>
  <router-view />
  <notifications position="bottom center" classes="notify" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topmenu from './components/Topmenu.vue'
export default defineComponent({
  name: 'App',
  components: {
    Topmenu,
  },
})
</script>
