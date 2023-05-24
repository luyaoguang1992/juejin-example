import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/light1',
    name: 'light1',
    meta: {
      name: '灯光1'
    },
    component: () => import(/* webpackChunkName: "light1" */ '../views/light1.vue'),
  },
  {
    path: '/light2',
    name: 'light2',
    meta: {
      name: '灯光2'
    },
    component: () => import(/* webpackChunkName: "light2" */ '../views/light2.vue'),
  },
  {
    path: '/map',
    name: 'map',
    meta: {
      name: '地图'
    },
    component: () => import(/* webpackChunkName: "map" */ '../views/map.vue'),
  },
  {
    path: '/book',
    name: 'book',
    meta: {
      name: '翻书'
    },
    component: () => import(/* webpackChunkName: "book" */ '../views/book.vue'),
  },
  {
    path: '/hover-title',
    name: 'hoverTitle',
    meta: {
      name: '标题hover'
    },
    component: () => import(/* webpackChunkName: "hoverTitle" */ '../views/hover-title.vue'),
  },
  {
    path: '/text-move',
    name: 'textMove',
    meta: {
      name: '文本move删除'
    },
    component: () => import(/* webpackChunkName: "textMove" */ '../views/text-move.vue'),
  },
  {
    path: '/football-field',
    name: 'football-field',
    meta: {
      name: '足球场'
    },
    component: () => import(/* webpackChunkName: "football-field" */ '../views/football-field.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
