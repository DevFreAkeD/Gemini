<template>
  <div class="bg-zinc-950 flex-1 min-h-screen pb-[15vh] relative">
    <div class="flex items-center justify-between text-[22px] p-5 text-gray-300">
      <p class="h1 text-[22px]">Gemini</p>
      <img src="" alt="" class="w-10 rounded-full" />
    </div>
    <div class="max-w-[900px] mx-auto">
      <div class="my-12 text-[56px] text-[#c4c7c5] font-medium">
        <p>
          <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello , Developer. </span>
        </p>
        <p class="text-zinc-700">How Can I Help You Today?</p>
      </div>
      <div class="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4">
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700"
          Suggest Some Place To Visit In Kerala
        >
          <p class="text-gray-200 text-[17px]">Suggest Some Place To Visit In Summers</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700"
            Brainstorm team bonding activities for our work retreat.
        >
            <p class="text-gray-200 text-[17px]">Draft a roadmap to learn DSA?</p>
            <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
          <div
            class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700"
            How to Create a Gyroscope using Disc.
          >
            <p class="text-gray-200 text-[17px]">How to Create a Discord Bot?</p>
            <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700"
            Create a Script for the youtube video about coding.
        >
          <p class="text-gray-200 text-[17px]">Create a Script for the youtube video about coding</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
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