import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";

const app = createApp(App);

app.use(router);
app.use(BoilerplatePlugin);

app.mount("#app");
