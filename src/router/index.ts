import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateNoteView from '../views/CreateNoteView.vue'
import NoteListView from '../views/NoteListView.vue'
import NoteView from '../views/NoteView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/notes',
    name: 'notes',
    redirect: '/notes/1',
  },
  {
    path: '/notes/create',
    name: 'create',
    component: CreateNoteView,
  },
  {
    path: '/notes/:id',
    name: 'notesPagination',
    component: NoteListView,
  },
  {
    path: '/note/:id',
    name: 'note',
    component: NoteView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
