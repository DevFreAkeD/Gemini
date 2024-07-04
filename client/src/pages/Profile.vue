<template>
  <div class="bg-zinc-900 w-full">
    <!-- Top bar with Gemini title and Profile icon -->
      <div class="flex items-center justify-between text-[22px] p-5 border-b-[1px] border-zinc-700">
        <p class="h1 text-[22px] text-gray-300 pl-6 font-medium">Gemini</p>
        <img @click="toggleProfileBox" :src="userIcon" alt="User Icon" class="h-6 w-6 cursor-pointer mr-6" />
      </div>

    <!-- Profile options box -->
    <div v-if="showProfileBox" class="absolute top-[50px] right-[10px] bg-zinc-800 m-2 p-2 w-44 rounded-lg shadow-lg">
      <ul class="text-white">
        <li @click="handleProfileClick" class="flex gap-3 py-2 px-3 cursor-pointer hover:bg-zinc-700 rounded-md">
          <img :src="profileIcon" alt="Profile Icon" class="w-5 h-5"/>
            Profile
         </li>
        <li @click="handleLogoutClick" class="flex gap-3 py-2 px-3 cursor-pointer hover:bg-zinc-700 rounded-md">
          <img :src="logoutIcon" alt="Logout Icon" class="w-5 h-5"/>
            Logout
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { userIcon, profileIcon, logoutIcon } from '../assets';

export default {
  data() {
    return {
      userIcon,
      profileIcon,
      logoutIcon,
      showProfileBox: false,
    };
  },
  methods: {
    toggleProfileBox() {
      this.showProfileBox = !this.showProfileBox;
    },
  }
};
</script>

<style>
</style>