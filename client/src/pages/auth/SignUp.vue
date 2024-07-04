<template>
    <div class="bg-zinc-900 w-full">
      <div class="flex items-center justify-between text-[22px] p-5 border-b-[1px] border-zinc-700">
        <p class="h1 text-[22px] text-gray-300 pl-6 font-medium">Gemini</p>
      </div>
      <div class="bg-zinc-950 flex flex-col items-center justify-center w-full pt-10 pb-16 gap-5 border-b-[4px] border-zinc-700">
        <h1 class="text-[60px] text-white font-medium">
          <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Gemini</span>
        </h1>
        <div class="bg-zinc-900 flex flex-col items-center justify-center px-2 py-5 border-[3px] rounded-md border-zinc-700 lg:w-[50rem] sm:w-[30rem]">
          <h3 class="text-white text-[24px]">Register</h3>
          <form class="flex flex-col items-center w-full px-3 pt-5 gap-4 h-1/2" @submit.prevent="register">
            <input v-model="name" type="text" placeholder="Name" class="w-full mb-4 p-4 text-zinc-900 rounded-md" />
            <input v-model="email" type="email" placeholder="Email" class="w-full mb-4 p-4 text-zinc-900 rounded-md" />
            <div class="w-full mb-4 relative">
              <input :type="passwordFieldType" v-model="password" placeholder="Password" class="w-full p-4 text-zinc-900 rounded-md" />
              <button type="button" @click="togglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                <svg v-if="passwordFieldType === 'password'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A9.956 9.956 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.614-4.412M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8" />
                </svg>
              </button>
            </div>
            <button type="submit" class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-zinc-900 font-medium text-sm w-36 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center">Register</button>
          </form>
          <p class="text-white pt-2 text-[16px]">Already Registered?
            <router-link to="/auth/login" class="underline">
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordFieldType: 'password'
      };
    },
    created() {
      const token = localStorage.getItem('token');
      if (token) {
        this.$router.push('/gemini');
      }
    },
    methods: {
        togglePassword() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        },
        async register() {
            if (!this.name.trim()) {
                alert('Enter Name.');
                return;
             }
            if (!this.email.trim()) {
                alert('Email is required.');
                return;
            }
            if (!this.password.trim()) {
                alert('Password is required.');
                return;
            }

            try {
                const response = await axios.post('http://localhost:8080/auth/register', {
                name: this.name,
                email: this.email,
                password: this.password
                });

                if (response.status === 201) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                alert('Registration successful! Redirecting to Gemini...');
                setTimeout(() => {
                    this.$router.push('/gemini');
                }, 5000);
                } else {
                alert('An unexpected error occurred. Please try again later.');
                }
            } catch (error) {
                if (error.response) {
                if (error.response.status === 400) {
                    alert('Invalid registration details.');
                } else if (error.response.status === 409) {
                    alert('Email already registered.');
                } else {
                    alert('An error occurred. Please try again later.');
                }
                } else {
                alert('An error occurred. Please try again later.');
                }
            }
        }
    }
  };
  </script>
  
  <style>
  </style>