<template>
    <div class="bg-zinc-900 w-full">
        <div class="flex items-center justify-between text-[22px] p-5 border-b-[1px] border-zinc-700">
            <p class="h1 text-[22px] text-gray-300 pl-6 font-medium">Gemini</p>
        </div>
        <div class="bg-zinc-950 flex flex-col items-center justify-center w-full py-28 gap-5 border-b-[4px] border-zinc-700">
            <h1 class="text-[60px] text-white font-medium">
                <span class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Gemini</span>
            </h1>
            <div class="bg-zinc-900 flex flex-col items-center justify-center px-2 py-5 border-[3px] rounded-md border-zinc-700 lg:w-[50rem] sm:w-[30rem]">
                <h3 class="text-white text-[24px]">Login</h3>
                <form @submit.prevent="loginUser" class="flex flex-col items-center w-full px-3 pt-5 gap-4 h-1/2">
                    <input v-model="email" type="email" placeholder="Email" class="w-full mb-4 p-4 text-800-900 rounded-md"/>
                    <input v-model="password" type="password" placeholder="Password" class="w-full mb-4 p-4 text-zinc-800 rounded-md"/>
                    <button type="submit" class="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-zinc-900 font-medium text-sm w-36 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    created() {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
        if (token) {
        // Redirect to Gemini page if token exists
        this.$router.push('/gemini');
        }
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:8080/auth/login', {
            email: this.email,
            password: this.password
          });
  
          if (response.status === 200) {
            const token = response.data.token;
            // Optionally, store token securely (e.g., in localStorage)
            localStorage.setItem('token', token);
            alert('Login successful!');
            // Optionally, redirect to another page upon successful login
            this.$router.push('/gemini');
          } else {
            alert(response.data);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        }
      }
    }
  };
</script>

<style>

</style>