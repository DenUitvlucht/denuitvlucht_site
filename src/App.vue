<template>
  <v-app :theme="theme">
    <Navbar> </Navbar>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import { theme } from "./composables/dark.ts";

export default {
  setup() {
    return {
      theme,
    };
  },

  name: "App",

  components: {
    Navbar,
    Home,
  },

  data: () => ({
    theme,
    overflow: "default",
  }),
};
</script>
