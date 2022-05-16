
<template>
  <!-- Content here -->
  <v-container fluid>
    <v-hover v-slot="{ isHovering, props }">
      <!-- Onze contactgegevens Card -->
      <v-card
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
        color="card"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Onze contactgegevens</p>
          <div class="text-secondary">Jordy Van Uytfange (voorzitter)</div>
          <div class="text-secondary">+32 468 32 23 57</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="tel:+32468322357"
            color="buttontext"
            class="text-secondary bg-buttonbg"
          >
            Bel nu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <!-- Adres Card -->
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <div class="text-secondary">Adres: Holstraat 47, 8790 Waregem</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="https://goo.gl/maps/FcsUFWfpddVycaLcA"
            color="buttontext"
            class="bg-buttonbg"
          >
            Kom eens langs
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <!-- General E-mail Card -->
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <div class="text-secondary">
            Contacteer ons hier voor algemene vragen.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="mailto:denuitvlucht@gmail.com"
            color="buttontext"
            class="bg-buttonbg"
          >
            Contacteer ons via mail!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <!-- Special E-mail Card -->
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <div class="text-secondary">
            Zit je met iets en wil je dit anoniem kwijt?
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="mailto:aanspreekpunt@denuitvlucht.com"
            color="buttontext"
            class="bg-buttonbg"
          >
            Aanspreekpunt Den Uitvlucht
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <!-- Very Special E-mail Card -->
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <div class="text-secondary">Ideeën of tips voor het jeugdhuis?</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="mailto:ideeenbus@denuitvlucht.com"
            color="buttontext"
            class="bg-buttonbg"
          >
            Ideeënbus Den Uitvlucht
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {};
</script>
