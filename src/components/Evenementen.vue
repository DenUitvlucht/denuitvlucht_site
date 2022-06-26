
<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Onze Evenementen Card -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto"
        max-width="700"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text
          ><p class="text-h6 mb-3 text-secondary">Onze evenementen</p>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card color="card">
                <v-img
                  :src="card.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                  cover
                >
                  <v-card-title
                    class="text-white mb-0"
                    v-text="card.title"
                  ></v-card-title>
                  <v-card-subtitle
                    class="text-white mb-3"
                    v-text="card.datum"
                  ></v-card-subtitle>
                </v-img>

                <v-card-actions class="bg-card">
                  <v-spacer></v-spacer>
                  <v-btn
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                    :href="card.infolink"
                    target="_blank"
                  >
                    Meer info
                  </v-btn>
                  <v-btn
                    v-if="card.ticketlink"
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                    :href="card.ticketlink"
                    target="_blank"
                  >
                    TICKETS
                  </v-btn>
                  <v-btn
                    v-if="card.inschrijvenlink"
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                    :href="card.inschrijvenlink"
                    target="_blank"
                  >
                    INSCHRIJVEN
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "DJ CONTEST - WAREGEM KOERSE",
        datum: "01/07/2022, 15/07/2022 en 22/07/2022",
        image: "/images/events/djcontest.png",
        flex: 12,
        tickets: true,
        inschrijven: false,
        infolink: "https://www.facebook.com/events/337703575096356",
        inschrijvenlink: "https://forms.gle/fJ7BiNwZCUqpX8Pn6",
        ticketlink: "",
      },
    ],
  }),
};
</script>
