import { createRouter, createWebHistory } from "vue-router";
import Default from "../components/DefaultLayout.vue";
import Signup from "../components/Accounts/Signup.vue";

import Home from "../views/Home.vue";
import RoomList from "../views/RoomList.vue";
import Post from "../views/Post.vue";
import About from "../views/About.vue";



const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/room',
        name: 'room',
        component: RoomList,
      },
      {
        path: '/post',
        name: 'post',
        component: Post,
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
  

  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
