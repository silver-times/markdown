/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
import "./assets/style.css";

// Composables
import { createApp } from "vue";
import markdownDirective from "@/directives/markdown";

const app = createApp(App);

registerPlugins(app);

app.directive("markdown", markdownDirective);
app.mount("#app");
