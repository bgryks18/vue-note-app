<template>
  <div class="pagination">
    <div class="paginationItem arrow">
      <v-icon name="bi-arrow-left-circle-fill" @click="goBack" />
    </div>
    <router-link to="/" class="paginationItem active">
      <span>1</span>
    </router-link>
    <router-link to="/" class="paginationItem">
      <span>2</span>
    </router-link>
    <router-link to="/" class="paginationItem">
      <span>3</span>
    </router-link>
    <router-link to="/" class="paginationItem">
      <span>4</span>
    </router-link>
    <div class="paginationItem arrow">
      <v-icon name="bi-arrow-right-circle-fill" @click="goBack" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Pagination',
  props: {},
  methods: {
    goBack() {
      this.$router.back()
    },
  },
})
</script>
