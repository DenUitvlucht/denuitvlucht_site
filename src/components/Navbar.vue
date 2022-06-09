
<template >
  <!-- Content here -->
  <v-container class="ma-0 pa-0">
    <v-app-bar fixed style="width: 100%" class="bg-primary">
      <v-app-bar-nav-icon
        @click="(drawer = !drawer), lock()"
      ></v-app-bar-nav-icon>
      <div>
        <v-toolbar-title
          style="cursor: pointer"
          @click="$router.push('/')"
          class="title text-no-wrap"
        >
          <div class="text-overline">Jeugdhuis Den Uitvlucht</div>
          <div class="text-caption mt-n2 mb-1">
            't Is geestiger me nen hoek af!'
          </div>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, i) in shortcuts"
        :key="i"
        :value="item"
        rounded="xl"
        class="ma-2 text-overline hidden-xs bg-buttonbg"
        :href="item.url"
        target="_blank"
      >
        <v-icon class="ma-0" start :icon="item.icon"></v-icon>

        <a class="ml-2 hidden-sm-and-down">{{ item.text }}</a>
      </v-btn>

      <v-btn
        rounded="xl"
        class="ma-2 text-overline bg-buttonbg"
        :href="static[0].url"
        target="_blank"
      >
        <v-icon class="ma-0" start :icon="static[0].icon"></v-icon>
        <a class="ml-2 hidden-sm-and-down">{{ static[0].text }}</a>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      temporary
      app
      v-model="drawer"
      class="bg-background"
      v-on:update:model-value="lock"
    >
      <v-card class="mx-auto bg-background">
        <v-img
          aspect-ratio="1"
          :src="source"
          eager
          style="cursor: pointer"
          @click="$router.push('/'), (drawer = !drawer), lock()"
          class="mt-5 bg-background"
          max-height="80"
        ></v-img>
        <v-list density="compact" class="bg-background">
          <v-list-item>
            <v-switch
              v-model="model"
              hide-details
              true-value="aan"
              false-value="uit"
              :label="`Donkere modus: ${model}`"
              color="switch"
              @click="toggleTheme()"
            ></v-switch>
          </v-list-item>
          <v-list-subheader>Algemeen</v-list-subheader>
          <v-list-item
            v-for="(item, i) in algemeen"
            :key="i"
            :value="item"
            :to="item.routerdestination"
            active-color="active"
            :href="item.url"
            @click="(drawer = !drawer), lock()"
          >
            <v-list-item-avatar start class="ma-2">
              <v-icon color="secondary" :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="mx-auto bg-background" max-width="400">
        <v-list density="compact" class="bg-background">
          <v-list-subheader>Socials</v-list-subheader>
          <v-list-item
            v-for="(item, i) in socials"
            :key="i"
            :href="item.url"
            target="_blank"
            @click="(drawer = !drawer), lock()"
            :value="item"
          >
            <v-list-item-avatar start class="ma-2">
              <v-icon color="secondary" :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {
  theme,
  model,
  source,
  toggleTheme,
  defaultTheme,
} from "../composables/dark.ts";

import { lock, drawerstate } from "../composables/bodylock.ts";

export default {
  setup() {
    return {
      theme,
      model,
      source,
      toggleTheme,
      defaultTheme,
      lock,
    };
  },
  mounted() {
    defaultTheme();
    if (theme.value === "dark") {
      this.model = "aan";
      this.source = "./images/denuitvlucht/Logo_Vector_Wit.svg";
    }
  },
  data: () => ({
    source: source,
    model: model,
    theme,
    drawer: drawerstate,
    algemeen: [
      { text: "Home", icon: "mdi-home", routerdestination: "/", url: "" },
      {
        text: "Over Ons",
        icon: "mdi-information",
        routerdestination: "/overons",
        url: "",
      },
      {
        text: "Word lid",
        icon: "mdi-account-heart",
        routerdestination: "",
        url: "https://inschrijven.denuitvlucht.com",
      },
      {
        text: "Bestuur",
        icon: "mdi-human-queue",
        routerdestination: "/bestuur",
        url: "",
      },
      {
        text: "Evenementen",
        icon: "mdi-party-popper",
        routerdestination: "/evenementen",
        url: "",
      },
      {
        text: "Shop",
        icon: "mdi-basket",
        routerdestination: "",
        url: "https://shop.denuitvlucht.com",
      },
      {
        text: "Dranklijst",
        icon: "mdi-beer",
        routerdestination: "/dranklijst",
        url: "",
      },
      {
        text: "Partners",
        icon: "mdi-handshake",
        routerdestination: "/partners",
        url: "",
      },
      {
        text: "Blog",
        icon: "mdi-book",
        routerdestination: "/blog",
        url: "",
      },
      {
        text: "Contact",
        icon: "mdi-phone",
        routerdestination: "/contact",
        url: "",
      },
      {
        text: "Privacybeleid",
        icon: "mdi-lock",
        routerdestination: "/privacy",
        url: "",
      },
    ],
    socials: [
      {
        text: "Facebook",
        icon: "mdi-facebook",
        url: "https://www.facebook.com/JeugdhuisDenUitvlucht",
      },
      {
        text: "Instagram",
        icon: "mdi-instagram",
        url: "https://www.instagram.com/denuitvlucht/",
      },
      {
        text: "Twitch",
        icon: "mdi-twitch",
        url: "https://www.twitch.tv/denuitvlucht",
      },
      {
        text: "Google",
        icon: "mdi-google",
        url: "https://www.google.com/search?q=den+uitvlucht+waregem",
      },
      {
        text: "LinkedIn",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/jeugdhuis-den-uitvlucht-22593a165/",
      },
      {
        text: "GitHub",
        icon: "mdi-github",
        url: "https://github.com/DenUitvlucht/",
      },
    ],
    shortcuts: [
      {
        text: "Jongere van het jaar",
        icon: "mdi-trophy-variant",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeI3_jvJJFMWeIEFbX328qSVw-yqWbSySGV2A8wCOS7cERd4g/viewform",
      },
      {
        text: "Mail Ons",
        icon: "mdi-email",
        url: "mailto:info@denuitvlucht.be",
      },
    ],
    static: [
      {
        text: "Word lid",
        icon: "mdi-account-heart-outline",
        url: "https://inschrijven.denuitvlucht.com",
      },
    ],
  }),
};
</script>