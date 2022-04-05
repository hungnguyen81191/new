import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

// createApp(App).use(router).mount("#app");
app.use(
    createAuth0({
        domain: "YOUR_DOMAIN",
    client_id: "YOUR_CLIENT_ID",
    redirect_uri: window.location.origin
    })
);
app.use(router).mount("#app");