<template>
  <v-container fluid>
    <v-card color="card" class="mx-auto" max-width="1000">
      <v-card-text
        ><p class="text-h6 mb-3 text-secondary">Onze partners</p>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card :href="card.website" target="_blank">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title
                  class="text-white mb-0"
                  v-text="card.title"
                ></v-card-title>
                <v-card-subtitle
                  class="text-white mb-3"
                  v-text="card.functie"
                ></v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Chiro Waregem Centrum",
        src: "/images/partners/chirowaregemcentrum.png",
        flex: 6,
        website: "http://www.chirowaregemcentrum.be/",
      },
      {
        title: "Jeugdhuis Jakkedoe",
        src: "/images/partners/jakkedoe.webp",
        flex: 6,
        website: "http://www.jakkedoe.be",
      },
      {
        title: "Formaat",
        src: "/images/partners/formaat.svg",
        flex: 6,
        website: "https://formaat.be/",
      },
      {
        title: "Stad Waregem",
        src: "/images/partners/stadwaregem.png",
        flex: 6,
        website: "https://www.waregem.be/",
      },
      {
        title: "Jeugdraad Waregem",
        src: "/images/partners/jeugdraad.png",
        flex: 6,
        website: "https://jeugdraad.webflow.io/",
      },
      {
        title: "Stamhoofd",
        src: "/images/partners/stamhoofd.png",
        flex: 6,
        website: "https://www.stamhoofd.be",
      },
    ],
  }),
};
</script>