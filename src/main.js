import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faUser, faClipboard, faGripLines, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import store from './store.js'
import './index.css'

import Notes from './routes/Notes.vue'

library.add(faUser, faSignOutAlt, faClipboard, faGripLines, faPlusSquare);

const routes = [
    { path: '/', redirect: () => '/notes' },
    { path: '/notes', component: Notes}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
