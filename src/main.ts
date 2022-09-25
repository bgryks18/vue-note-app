import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiLayoutTextSidebarReverse,
  HiSolidPlus,
  IoHome,
  BiArrowLeftCircleFill,
  BiArrowRightCircleFill,
  GiNotebook,
} from 'oh-vue-icons/icons'
import Notifications from '@kyvg/vue3-notification'
addIcons(BiLayoutTextSidebarReverse, HiSolidPlus, IoHome, BiArrowLeftCircleFill, BiArrowRightCircleFill, GiNotebook)
createApp(App).use(router).use(store).use(Notifications).component('v-icon', OhVueIcon).mount('#app')
