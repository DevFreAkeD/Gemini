<template>
  <div class="bg-zinc-950 flex-1 min-h-screen pb-[15vh] relative">
    <div class="flex items-center justify-between text-[22px] p-5 text-gray-300">
      <p class="h1 text-[21px]">Gemini</p>
      <img src="" alt="" class="w-10 sm:w-8 rounded-full" />
    </div>
    <div class="max-w-[900px] mx-auto sm:px-2">
      <div class="px-4 my-12 text-[56px] sm:text-[42px] text-white font-medium">
        <p>
          <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello , Developer. </span>
        </p>
        <p class="text-zinc-700">How Can I Help You Today?</p>
      </div>
      <div class="p-4 mb-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
          <p class="text-gray-200 text-[18px]">Suggest Some Place To Visit In Summers</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
          <p class="text-gray-200 text-[18px]">Draft a roadmap to learn DSA?</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
          <p class="text-gray-200 text-[18px]">How to Create a Discord Bot?</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
        <div class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
          <p class="text-gray-200 text-[18px]">Create a Script for the youtube video about coding</p>
          <img src="" alt="" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
        </div>
      </div>
      <div class="absolute bottom-0 w-full max-w-[900px] px-5 pt-3 mb-4 mx-auto justify-center">
        <div class="flex items-center justify-between gap-5 bg-zinc-800 p-2.5 rounded-full">
          <input
            input=""
            value=""
            type="text"
            placeholder="Enter the Prompt Here"
            class="flex-1 text-gray-200 bg-transparent border-0 outline-0 p-2 text-[16px] sm:text-[15px]"
          />
          <div class="flex items-center gap-4">
            <img :src={imgIcon} alt="imgIcon" class="w-6 cursor-pointer" />
            <img :src={micIcon} alt="micIcon" class="w-6 cursor-pointer" />
            <img :src={sendIcon} alt="sendIcon" class="w-6 cursor-pointer" />
          </div>
        </div>
        <div class="text-[13px] mt-3 text-center font-light">
          <p class="text-white">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
        </div>
      </div>
    </div>
  </div>
</template>           

<script>
import { micIcon, sendIcon, codeIcon, imgIcon } from "../assets";

  export default {
    setup() {
      return { micIcon, sendIcon, codeIcon, imgIcon };
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