import { createApp, watchEffect } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import i18n from "@/i18n/index.js";

import "@/config/vee-validate/rules.js";
import "@/config/vee-validate/messages.js";

import "@/style.css";

// ////////////////////////////////////////////////////////////////////

import Echo from "laravel-echo";
import Pusher from "pusher-js";
watchEffect(() => {
  Pusher.Runtime.createXHR = function () {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    return xhr;
  };
  window.Pusher = Pusher;
  window.Echo = new Echo({
    broadcaster: "pusher",
    authEndpoint: import.meta.env.VITE_BACKEND_API_URL + "/broadcasting/auth",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    secret: import.meta.env.VITE_PUSHER_APP_SECRET,
    forceTLS: true,
    withCredentials: true,
  });
});

// /////////////////////////////////////////////////////////////////////

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
