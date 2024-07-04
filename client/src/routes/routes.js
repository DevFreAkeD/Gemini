import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue";
import Gemini from "../pages/Gemini.vue";
import Login from "../pages/auth/SignIn.vue";
import SignUp from "../pages/auth/SignUp.vue";
import Profile from '../pages/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gemini',
    name: 'Gemini',
    component: Gemini,
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: SignUp,
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;