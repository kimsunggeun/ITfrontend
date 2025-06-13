import "@/assets/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import router from "@/router/main";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia()

const app = createApp(App);
pinia.use(piniaPluginPersistedstate)
app.use(vuetify);
app.use(router);
app.use(pinia)
app.mount("#app");
