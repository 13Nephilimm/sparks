import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locales";

const app = createApp(App);

app.mixin({
  methods: {
    getMonitorSize() {
      if (window.innerWidth < 550) return "mobile";
      if (window.innerWidth > 549 && window.innerWidth < 1200) return "tablet";
      if (window.innerWidth > 1199) return "web";
    },
  },
});

app.use(store).use(i18n).use(router).mount("#app");
