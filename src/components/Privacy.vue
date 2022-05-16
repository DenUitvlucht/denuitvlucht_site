
<template>
  <v-container fluid>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="card"
        class="mx-auto mt-1 pa-3"
        max-width="1000"
        :elevation="isHovering ? 12 : 2"
        v-bind="props"
      >
        <v-card-text>
          <p class="text-h6 mb-3 text-secondary">Ons privacybeleid</p>
          <div class="text-secondary">
            Wij willen er zeker van zijn dat onze leden er zich van bewust zijn
            dat hun gegevens verzameld worden.
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Welke persoonsgegevens verzamelen wij?
          </p>
          <div class="ml-4 text-secondary">
            <li>Naam en voornaam</li>
            <li>Adres</li>
            <li>Land voor oorsprong</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (enkel bij shop.denuitvlucht.com)</li>
            <li>Geboortedatum</li>
            <li>Noodcontactpersonen</li>
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Welke persoonsgegevens gebruiken wij?
          </p>
          <div class="ml-4 text-secondary">
            <li>Naam en voornaam</li>
            <li>E-mailadres</li>
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Waarom gebruiken wij die persoonsgegevens?
          </p>
          <div class="text-secondary">
            De gegevens worden gebruikt bij het versturen van uitnodigingen voor
            evenementen, ledenvergaderingen of andere belangrijke momenten.
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Op welke manier komen wij aan deze persoonsgegevens?
          </p>
          <div class="text-secondary">
            De gegevens worden opgevraagd wanneer een lid zich wil inschrijven.
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Wie gebruikt en verwerkt er de persoonsgegevens?
          </p>
          <div class="text-secondary">
            Enkel onze bestuursleden hebben toegang tot de gegevens van de
            leden.
          </div>
          <br />
          <p class="text-subtitle-1 text-secondary">
            Hoe lang worden de persoonsgegevens bewaard?
          </p>
          <div class="text-secondary">
            Een lidmaatschap duurt telkens 1 jaar. Daarna worden de gegevens
            verwijderd. De bestelgegevens van shop.denuitvlucht.com worden om de
            6 maanden verwijderd.
          </div>
          <br />
        </v-card-text>
        <v-card-actions>
          <v-btn
            target="_blank"
            href="https://formaat.be/informatie/gdpr"
            color="primary"
            class="bg-buttonbg"
          >
            Richtlijnen Formaat
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {};
</script>
