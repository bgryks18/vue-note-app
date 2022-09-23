import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiLayoutTextSidebarReverse,
  HiSolidPlus,
  IoHome,
  BiArrowLeftCircleFill,
  BiArrowRightCircleFill,
} from 'oh-vue-icons/icons'

addIcons(BiLayoutTextSidebarReverse, HiSolidPlus, IoHome, BiArrowLeftCircleFill, BiArrowRightCircleFill)
createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')
