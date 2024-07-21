<template>
  <div class="bg-zinc-900 w-full">
    <!-- Top bar with Gemini title and Profile icon -->
    <div class="flex items-center justify-between text-[22px] p-5 border-b-[1px] border-zinc-700">
      <p class="h1 text-[22px] text-gray-300 pl-6 font-medium">Gemini</p>
      <img @click="toggleProfileBox" :src="userIcon" alt="User Icon" class="h-6 w-6 cursor-pointer mr-6" />
    </div>

    <!-- Profile options box -->
    <div v-if="showProfileBox" class="absolute top-[50px] right-[10px] bg-zinc-800 m-2 p-2 w-auto rounded-lg shadow-lg">
      <ul class="text-white">
        <li class="flex gap-4 py-2 px-3">
          <img :src="profileIcon" alt="Profile Icon" class="w-5 h-5 mt-1"/>
          <div>
            <p class="font-medium">{{ userProfile.name }}</p>
            <p>{{ userProfile.email }}</p>
            <router-link to="/user/profile" class="text-gray-400 hover:text-gray-200 hover:underline">Visit Profile</router-link>
          </div>
        </li>
        <hr class="border-gray-600 my-2">
        <li @click="logout" class="flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-zinc-700 rounded-md">
          <img :src="logoutIcon" alt="Logout Icon" class="w-5 h-5 mt-1"/>
          Logout
        </li>
      </ul>
    </div>

    <!-- Main content section -->
    <div class="bg-zinc-950 flex flex-col items-center justify-center w-full py-24 gap-5 border-b-[4px] border-zinc-700">
      <div class="bg-zinc-900 flex flex-col items-center justify-center px-2 py-5 border-[3px] rounded-md border-zinc-700 lg:w-[50rem] sm:w-[30rem]">
        <h3 class="text-white text-[24px] my-2">Your Profile</h3>
        <!-- Display profile picture here -->
        <img :src="userIcon" alt="Profile Picture" class="rounded-full h-24 w-24 mt-4">
        <button class="mt-2 text-gray-300 hover:text-gray-100 focus:outline-none">Edit Profile Picture</button>
        <div class="items-start justify-start">
          <div class="mt-4 space-x-5">
            <label class="text-gray-300">Name:</label>
            <input type="text" v-model="userProfile.name" disabled class="text-gray-300 bg-transparent border-b-[1px] border-gray-500 focus:outline-none">
          </div>
          <div class="mt-2 space-x-5">
            <label class="text-gray-300">Email:</label>
            <input type="email" v-model="userProfile.email" disabled class="text-gray-300 bg-transparent border-b-[1px] border-gray-500 focus:outline-none">
          </div>
          <div class="mt-2 space-x-5">
            <label class="text-gray-300">Password:</label>
            <input type="email" v-model="userProfile.password" disabled class="text-gray-300 bg-transparent border-b-[1px] border-gray-500 focus:outline-none">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userIcon, profileIcon, logoutIcon} from '../assets';

export default {
  data() {
    return {
      userIcon,
      profileIcon,
      logoutIcon,
      showProfileBox: false,
      userProfile: {
        name: 'John Doe', // Replace with actual user data from your backend
        email: 'johndoe@example.com', // Replace with actual user data from your backend
        // Add more profile data as needed
      }
    };
  },
  methods: {
    toggleProfileBox() {
      this.showProfileBox = !this.showProfileBox;
    },
    handleChangeEmail() {
      // Implement email change functionality
      console.log('Change email clicked');
    },
    handleChangePassword() {
      // Implement password change functionality
      console.log('Change password clicked');
    },
    handleLogoutClick() {
      // Implement logout functionality
      console.log('Logout clicked');
    }
  }
};
</script>

<style>
</style>