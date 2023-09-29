import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '@/store/index.js'
// import VueMask from 'v-mask'
import VueTheMask from 'vue-the-mask'

createApp(App)
.use(store)
.use(VueTheMask)
.use(router)
.mount("#app");
