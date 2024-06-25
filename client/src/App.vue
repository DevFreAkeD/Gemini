<template>
  <div class="bg-gray-200 min-h-screen flex flex-row">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Sidebar,
    Main,
  }
}
</script>

<style>

</style>