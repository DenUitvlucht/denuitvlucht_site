<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Alerts -->
    <div>
      <v-alert
        v-for="(item, i) in alerts"
        :key="i"
        :value="item"
        max-width="1000"
        :v-model="item.alert"
        border="start"
        variant="contained-text"
        close-label="Close Alert"
        color="alert"
        :title="item.titel"
        class="mx-auto mb-3"
      >
        <p class="my-2">{{ item.text }}</p>
        <v-btn
          @click="$router.push('/djcontest')"
          class=""
          color="alert"
          variant="outlined"
        >
          <v-icon start :icon="item.icon"></v-icon>
          STEM NU
        </v-btn>
      </v-alert>
    </div>
    <!-- Image Carousel -->
    <v-card class="mx-auto mb-3" max-width="1000" color="card">
      <v-card-text color="card">
        <v-carousel
          cycle
          class="mx-auto mb-3"
          height="auto"
          width="auto"
          hide-delimiter-background
          hide-delimiters
          show-arrows="hover"
          style="max-width: 800px"
        >
          <v-carousel-item
            v-for="i in fotos"
            :key="i"
            :src="i.src"
          ></v-carousel-item>
        </v-carousel>
        <!-- Events -->
        <v-list density="compact" class="bg-card">
          <v-list-subheader>Kalender</v-list-subheader>
          <v-list-item
            class="pa-3"
            v-for="(item, i) in kalender"
            :key="i"
            :value="item"
          >
            <v-list-item-avatar start class="mr-2">
              <v-icon color="secondary" :icon="item.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-header>
              <v-list-item-title v-text="item.text"></v-list-item-title>
              <v-list-item-subtitle
                class="mb-1"
                v-text="item.text2"
              ></v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>

          <v-card-actions>
            <v-btn
              color="buttontext"
              class="bg-buttonbg"
              @click="$router.push('/evenementen')"
            >
              Alle activiteiten
            </v-btn>
          </v-card-actions>
        </v-list>
      </v-card-text>
    </v-card>
    <!-- Dark/Light Mode Alert -->
    <div>
      <v-alert
        max-width="1000"
        border="start"
        variant="contained-text"
        color="alert"
        class="mx-auto mb-3"
      >
        <v-alert-title v-if="theme == 'light'">Donkere modus</v-alert-title>
        <v-alert-title v-else>Lichte modus</v-alert-title>
        <p v-if="theme == 'light'" class="my-2">
          Onze site is ook beschikbaar in een donkere modus. Ideaal voor de
          nachtuilen onder ons.
        </p>
        <p v-else class="my-2">
          Onze site is ook beschikbaar in een lichte modus. Kan 's nachts
          mogelijk verblindend zijn!
        </p>
        <v-btn
          target="_blank"
          class=""
          color="alert"
          variant="outlined"
          @click="toggleTheme()"
        >
          <p v-if="theme == 'light'">Maak het donker</p>
          <p v-else>Maak het licht</p>
        </v-btn>
      </v-alert>
    </div>
    <!-- Openingsuren Card -->
    <v-card class="mx-auto mb-3" max-width="1000" color="card">
      <v-card-text color="card">
        <v-list density="compact" class="bg-card">
          <v-list-subheader class="">Openingsuren</v-list-subheader>
          <v-list-item
            class="pa-3"
            two-line
            v-for="(item, i) in openingsuren"
            :key="i"
            :value="item"
            active-color="active"
          >
            <v-list-item-header>
              <v-list-item-title v-text="item.text"></v-list-item-title>
              <v-list-item-subtitle
                class="mb-1"
                v-text="item.text2"
              ></v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn
            target="_blank"
            href="https://goo.gl/maps/FcsUFWfpddVycaLcA"
            color="buttontext"
            class="bg-buttonbg"
          >
            Spring eens binnen!
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { theme, toggleTheme } from "../composables/dark.ts";

export default {
  setup() {
    return {
      toggleTheme,
    };
  },

  data() {
    return {
      theme,
      alerts: [
        {
          titel: "DJ CONTEST - WAREGEM KOERSE - FINALE",
          text: "Tijd voor de finale! Stem vanaf nu op jouw favoriete finalist!",
          status: true,
          icon: "mdi-music",
        },
      ],
      alerts2: [
        {
          titel: "Donkere modus",
          text: "Onze site is ook beschikbaar in een donkere modus. Handig voor de nachtuilen onder ons!",
          website: "",
          status: true,
        },
      ],
      fotos: [
        {
          src: "/images/events/tuinies2022.png",
        },
        {
          src: "/images/events/djcontest.png",
        },
      ],
      openingsuren: [
        { text: "Woensdag", text2: "17:00 - 02:00" },
        { text: "Vrijdag", text2: "16:00 - 02:00" },
        { text: "Zaterdag", text2: "20:00 - 02:00" },
        { text: "Zondag", text2: "16:00 - 20:00" },
      ],
      kalender: [
        {
          text: "TUINIES @DENUITVLUCHT",
          text2: "Elke maandag vanaf 04/07",
          icon: "mdi-disc",
        },
        {
          text: "DJ CONTEST - WAREGEM KOERSE",
          text2: "01/07/2022, 15/07/2022 en 22/07/2022",
          icon: "mdi-disc",
        },
      ],
    };
  },
};
</script>

<style>
.v-btn.v-btn--elevated.v-btn--icon.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-contained {
  background-color: white;
}
.v-btn.v-btn--elevated.v-btn--icon.v-theme--dark.v-btn--density-default.v-btn--size-default.v-btn--variant-contained {
  background-color: #2e3030;
}
</style>