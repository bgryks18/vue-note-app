<template>
  <div class="list">
    <div class="header">
      <h3>My Notes</h3>
    </div>
    <div class="listItem">
      <div class="listTitle">
        <span>
          <router-link to="/">Title</router-link>
        </span>
      </div>
      <div class="listContent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus eos quae iste doloremque molestias et
          suscipit quasi fugiat dolorum est repudiandae esse, facilis deleniti reiciendis ipsam sit reprehenderit velit.
          <router-link to="/">see more</router-link>
        </p>
      </div>
      <div class="listInfo">
        <small>{{ Date.now() }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'List',
})
</script>
