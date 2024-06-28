<template>
  <div class="bg-gray-200 min-h-screen flex flex-row">
    <Gemini />
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import Gemini from './pages/Gemini.vue'

export default {
  components: {
    Home,
    Gemini,
  }
}
</script>

<style>

</style>