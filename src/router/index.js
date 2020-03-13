import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:username',
    name: 'UserProjects',
    component: () => import('../views/UserProjects.vue'),
  },
  {
    path: '/:username/:project',
    name: 'ProjectDetail',
    component: () => import('../views/ProjectDetail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
