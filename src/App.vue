<template>
  <img
    alt="Vue logo1"
    src="./assets/logo.png"
  >
</template>

<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup () {
    onMounted(() => {
      console.log('App is init')
    })
  }
})

</script>
