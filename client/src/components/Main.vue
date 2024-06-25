<template>
  <div class="bg-gray-950 flex-1 min-h-screen pb-[15vh] relative">
    <div class="flex items-center justify-between text-[22px] p-5 text-gray-300">
      <p>Gemini</p>
      <img src="" alt="" class="w-10 rounded-full" />
    </div>
    <div class="max-w-[900px] mx-auto">
      <div class="my-12 text-[56px] text-[#c4c7c5] font-medium">
        <p>
          <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello , Developer. </span>
        </p>
        <p class="text-gray-300">How Can I Help You Today?</p>
      </div>
    </div>
  </div>
</template>           

<script>
  export default {
    setup() {
    }
};
</script>

<style>
@keyframes loader {
  0% {
    background-position: -800px 0px;
  }
  100% {
    background-position: 800px 0px;
  }
}
</style>