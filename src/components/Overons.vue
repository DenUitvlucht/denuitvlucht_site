
<template>
  <!-- Content here -->
  <v-container fluid>
    <!-- Over Ons Card -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1 mb-5"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Over ons</p>

          <div class="text-secondary">
            In de eerste plaats een groep maten! Met een missie weliswaar: We
            steken de leute terug in jouw weekend!
          </div>
          <div class="text-secondary">
            Samen zijn wij Jeugdhuis Den Uitvlucht, ah ja, want alleen is ook
            maar alleen.
          </div>
          <br />
          <div class="text-secondary">
            Op dit moment bestaat ons bestuur uit 8 machtige mensen: Jordy,
            Robin, Ferre, Daan, Wout, Tealc, Rune en Xander.
          </div>
          <br />
          <div class="text-secondary">
            Met 8 het hele schip op koers houden zou onbegonnen werk zijn,
            vandaar dat wij ook rekenen op onze trouwe en talrijke medewerkers
            en sympathisanten.
          </div>
          <br />
          <div class="text-secondary">
            Samen organiseren we feesten, vormingen, activiteiten,
            thema-avonden… Er staat niet echt een grens op wat we doen en er is
            slechts één voorwaarde: Goesting!
          </div>
          <br />
          <div class="text-secondary">Vragen of voorstellen?</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            href="mailto:denuitvlucht@gmail.com"
            color="buttontext"
            class="bg-buttonbg"
          >
            Contacteer ons via mail
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>

    <!-- Lid Worden Card -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Lid worden?</p>
          <v-img
            src="images/denuitvlucht/wordlid.jpg"
            class="white--text align-end mb-5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
            max-height="350px"
          ></v-img>
          <div class="text-secondary">
            Geïnteresseerd in onze werking? Dat doet ons plezier!
          </div>
          <br />
          <div class="text-secondary">
            Een lidkaart kost €5, als lid krijg je van ons enkele exclusieve
            voordelen:
          </div>
          <br />
          <div class="ml-4 text-secondary">
            <li>
              Wij garanderen jou dat je op ieder evenement van Den Uitvlucht
              gratis toegang krijgt (de toegangsprijs voor niet-leden is meestal
              €2,5)
            </li>
            <li>Korting op vaten</li>
            <li>Je krijgt een speciale plaats in ons hart</li>
          </div>
          <br />
          <div class="text-secondary">
            Je kan je inschrijven via onderstaande website, dan ben je verzekerd
            van je lidmaatschap. Daarna kan je je lidkaart komen ophalen aan
            onze toog!
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            target="_blank"
            href="https://inschrijven.denuitvlucht.com"
            color="buttontext"
            class="bg-buttonbg"
          >
            Schrijf je nu in!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
