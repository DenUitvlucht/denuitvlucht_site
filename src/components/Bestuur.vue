<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Ons Bestuur Card -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Ons bestuur</p>

          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card color="card">
                <v-img
                  :src="card.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
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

                <v-card-actions class="bg-card">
                  <v-spacer></v-spacer>
                  <v-btn
                    size="small"
                    variant="text"
                    icon="mdi-telegram"
                    :href="card.telegram"
                    target="_blank"
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                  ></v-btn>
                  <v-btn
                    size="small"
                    variant="text"
                    icon="mdi-phone"
                    :href="card.phone"
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                  ></v-btn>

                  <v-btn
                    size="small"
                    variant="text"
                    icon="mdi-email"
                    :href="card.email"
                    class="text-secondary bg-buttonbg"
                    color="buttontext"
                  ></v-btn>
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
        title: "Jordy Van Uytfange",
        telegram: "https://t.me/Jacquelinepraline",
        phone: "tel:+32468322357",
        email: "mailto:jordy.vanuytfange01@gmail.com",
        functie: "Voorzitter en Penningmeester",
        image: "/images/bestuur/jordy.jpg",
        flex: 6,
      },
      {
        title: "Robin Vandenberghe",
        telegram: "https://t.me/spijtttttt",
        phone: "tel:+32468182660",
        email: "mailto:robin.vandenberghe@student.howest.be",
        functie: "Ondervoorzitter en Brouwer",
        image: "/images/bestuur/robin.jpg",
        flex: 6,
      },
      {
        title: "Ferre Willems",
        telegram: "https://t.me/sperre_willemina",
        phone: "tel:+32493676114",
        email: "mailto:Ferre_Willems@outlook.be",
        functie: "Secretaris",
        image: "/images/bestuur/ferre.jpg",
        flex: 6,
      },
      {
        title: "Daan Vervacke",
        telegram: "https://t.me/Waarzijnieraldieschoonpoepen",
        phone: "tel:+32485834557",
        email: "mailto:daan.vervacke@gmail.com",
        functie: "Bestuurslid",
        image: "/images/bestuur/daan.jpg",
        flex: 6,
      },
      {
        title: "Wout Hostens",
        telegram: "https://t.me/Woutjee",
        phone: "tel:+32468166869",
        email: "mailto:wout.hostens@gmail.com",
        functie: "Bestuurslid",
        image: "/images/bestuur/wout.jpg",
        flex: 6,
      },
      {
        title: "Tealc D'haene",
        telegram: "https://t.me/RapperDoevoe",
        phone: "tel:+32499720275",
        email: "mailto:tealc_dhaene@hotmail.com",
        functie: "Bestuurslid",
        image: "/images/bestuur/tealc.jpg",
        flex: 6,
      },
      {
        title: "Rune Reynaert",
        telegram: "https://t.me/RuneReynaert",
        phone: "tel:+32468028039",
        email: "mailto:rune.reynaert@gmail.com",
        functie: "Interim-bestuurslid",
        image: "/images/bestuur/rune.jpg",
        flex: 6,
      },
            {
        title: "Xander Claerhout",
        telegram: "https://t.me/kastaar_jh",
        phone: "tel:+32478212476",
        email: "mailto:claerhout.xander@gmail.com",
        functie: "Interim-bestuurslid",
        image: "/images/bestuur/xander.jpg",
        flex: 6,
      },
    ],
  }),
};
</script>