import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue";
import Gemini from "../pages/Gemini.vue";
import Login from "../pages/auth/SignIn.vue";
import SignUp from "../pages/auth/SignUp.vue";

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
    path: '/auth/signin',
    name: 'SignIn',
    component: Login,
  },
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
