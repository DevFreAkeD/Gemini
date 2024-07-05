<template>
  <div class="bg-zinc-950 flex-1 min-h-screen pb-[15vh] relative">
    <!-- Top bar with Gemini title and Profile icon -->
    <div class="flex items-center justify-between p-5 text-gray-300">
      <p class="h1 text-[21px]">Gemini</p>
      <img @click="toggleProfileBox" :src="userIcon" alt="User Icon" class="h-6 w-6 cursor-pointer" />
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

    <!-- Chat Cards or Hello Message -->
    <div class="max-w-[900px] mx-auto sm:px-2">
      <div v-if="!hideChatCards">
        <div class="px-4 my-12 text-[56px] sm:text-[42px] text-white font-medium">
          <p>
            <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello, Developer.</span>
          </p>
          <p class="text-zinc-700">How Can I Help You Today?</p>
        </div>
        
        <!-- Chat Cards -->
        <div class="p-4 mb-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div @click="useCardPrompt('Suggest Some Place To Visit In Summers')" class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
            <p class="text-gray-200 text-[18px]">Suggest Some Place To Visit In Summers</p>
            <img src="" alt="Icon" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
          <div @click="useCardPrompt('Draft a roadmap to learn DSA?')" class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
            <p class="text-gray-200 text-[18px]">Draft a roadmap to learn DSA?</p>
            <img src="" alt="Icon" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
          <div @click="useCardPrompt('How to Create a Discord Bot?')" class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
            <p class="text-gray-200 text-[18px]">How to Create a Discord Bot?</p>
            <img src="" alt="Icon" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
          <div @click="useCardPrompt('Create a Script for the youtube video about coding')" class="h-[200px] p-4 bg-zinc-800 rounded-lg relative cursor-pointer hover:bg-zinc-700">
            <p class="text-gray-200 text-[18px]">Create a Script for the youtube video about coding</p>
            <img src="" alt="Icon" class="w-9 p-1 absolute bottom-2 right-2 rounded-full" />
          </div>
        </div>  
      </div>
      <!-- Chat history -->
      <div class="chat-container p-5 mb-[40px]" style="max-height: calc(69vh); overflow-y: auto;">
        <div v-for="(chat, index) in chatHistory" :key="index" class="mt-4 p-4 rounded-lg" 
             :class="{'bg-zinc-800': chat.sender === 'Gemini', 'bg-gray-800 place-content-end': chat.sender === 'User'}">
          <div v-if="chat.sender === 'User'" class="flex items-end justify-end">
            <p class="text-gray-200">{{ chat.message }}</p>
            <img :src="userIcon" alt="User Icon" class="w-6 h-6 ml-2 rounded-full" />
          </div>
          <div v-else class="flex">
            <img :src="geminiIcon" alt="Gemini Icon" class="w-6 h-6 mr-2 rounded-full" />
            <p class="text-gray-200">{{ chat.message }}</p>
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="absolute bottom-0 w-full max-w-[900px] px-5 pt-3 mb-4 mx-auto justify-center">
        <div class="flex items-center justify-between gap-5 bg-zinc-800 p-2.5 rounded-full">
          <input
            v-model="userPrompt"
            type="text"
            placeholder="Enter the Prompt Here"
            class="flex-1 text-gray-200 bg-transparent border-0 outline-0 p-2 text-[16px] sm:text-[15px]"
            @keydown.enter="GenerateResponse"
          />
          <div class="flex items-center gap-4">
            <img :src="imgIcon" alt="imgIcon" class="h-6 w-6 cursor-pointer"/>
            <img :src="micIcon" alt="micIcon" class="h-6 w-6 cursor-pointer" />
            <img :src="sendIcon" alt="sendIcon" class="h-6 w-6 cursor-pointer" @click="GenerateResponse" />
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
import { micIcon, sendIcon, imgIcon, geminiIcon, userIcon, profileIcon, logoutIcon } from '../assets';
import axios from 'axios';

export default {
  data() {
    return {
      userPrompt: '',
      chatHistory: [],
      micIcon,
      sendIcon,
      imgIcon,
      userIcon,
      geminiIcon,
      profileIcon,
      logoutIcon,
      hideChatCards: false,
      showProfileBox: false,
      isLoggedIn: false,
      userProfile: {
        name: 'John Doe', // Replace with actual user data from your backend
        email: 'johndoe@example.com', // Replace with actual user data from your backend
        // Add more profile data as needed
      }
    };
  },
  created() {
    this.checkAuthentication();
  },
  methods: {
    async sendPrompt() {
      if (!this.userPrompt) {
        return;
      }

      // Add user's prompt to chat history
      this.chatHistory.push({ sender: 'User', message: this.userPrompt });

      try {
        const res = await axios.post('http://localhost:8080/gemini/chat', { prompt: this.userPrompt });
        // Add Gemini's response to chat history
        this.chatHistory.push({ sender: 'Gemini', message: res.data.response });
      } catch (error) {
        console.error('Error during chat:', error);
        this.chatHistory.push({ sender: 'Gemini', message: 'An error occurred while fetching the response.' });
      }

      // Clear the input
      this.userPrompt = '';

      // Hide chat cards after the first prompt
      this.hideChatCards = true;
    },
    useCardPrompt(prompt) {
      this.userPrompt = prompt;
      this.sendPrompt();
      this.hideChatCards = true;
    },
    GenerateResponse() {
      this.sendPrompt();
      this.hideChatCards = true;
    },
    toggleProfileBox() {
      this.showProfileBox = !this.showProfileBox;
    },
    checkAuthentication() {
      const token = localStorage.getItem('token'); // Assuming you store token in localStorage
        if (token) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
      }
    },
    logout() {
      localStorage.removeItem('token'); // Remove token from localStorage
        this.isLoggedIn = false; // Update isLoggedIn state
        // Optionally, redirect user to login page after logout
      this.$router.push('/');
    }
  },
};
</script>

<style>
</style>