<template>
  <div class="pagination">
    <div class="paginationItem arrow" :class="Number($route.params.id) === 1 && 'passive'">
      <v-icon name="bi-arrow-left-circle-fill" @click="goBack" />
    </div>
    <router-link
      :to="'/' + page + '/' + item"
      class="paginationItem"
      :class="$route.params.id == item && 'active'"
      v-for="item in numbers"
      :key="item"
    >
      <span>{{ item }}</span>
    </router-link>
    <div class="paginationItem arrow" :class="Number($route.params.id) === numbers.length && 'passive'">
      <v-icon name="bi-arrow-right-circle-fill" @click="goNext" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Pagination',
  data() {
    return {
      perPage: 5,
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  computed: {
    numbers() {
      const pageNumbers = []
      const max = Math.ceil(this.items.length / this.perPage)
      for (let i = 1; i <= max; i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    },
  },
  methods: {
    goBack() {
      const id = this.$route.params.id
      if (Number(id) === 1) {
        return
      }
      this.$router.push('/' + this.page + '/' + (Number(id) - 1))
    },
    goNext() {
      const id = this.$route.params.id
      if (Number(id) === this.numbers.length) {
        return
      }
      this.$router.push('/' + this.page + '/' + (Number(id) + 1))
    },
  },
})
</script>
