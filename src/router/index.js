import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/MyHome.vue'; 
import Favorites from '../pages/MyFavorites.vue'; 
import NotFound from '../pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
    },
    {
      path: '*',  
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
