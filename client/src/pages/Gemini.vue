<template>
    <div class="bg-gray-200 min-h-screen w-full flex">
        <Sidebar />
        <Main />
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Main from '../components/Main.vue';

export default {
  components: {
    Sidebar,
    Main,
  }
};
</script>

<style lang="scss" scoped>

</style>